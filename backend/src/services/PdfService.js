const fs = require('fs');
const path = require('path');
const { createHash } = require('crypto');
const puppeteer = require('puppeteer-core');
const chromium = require('@sparticuz/chromium-min');
const os = require('os');

const CACHE_DIR = path.join(__dirname, '..', '..', 'cache', 'images');

const ensureDirectory = (dirPath) => {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
};

ensureDirectory(CACHE_DIR);

const createTempUserDataDir = () => fs.mkdtempSync(path.join(os.tmpdir(), 'fresquia-pdf-'));
const removeDirIfExists = (dir) => {
  if (!dir) {
    return;
  }
  try {
    fs.rmSync(dir, { recursive: true, force: true });
  } catch (error) {
    console.warn(`Failed to clean temp directory ${dir}:`, error.message || error);
  }
};

const FRONTEND_PUBLIC_DIR = path.join(__dirname, '..', '..', '..', 'frontend', 'public');

const cacheDataUrlImage = (dataUrl) => {
  const match = dataUrl.match(/^data:(image\/[a-zA-Z0-9+.-]+);base64,(.+)$/);
  if (!match) {
    return null;
  }

  const [, mimeType, base64Data] = match;
  const extension = mimeType === 'image/svg+xml' ? 'svg' : (mimeType.split('/')[1] || 'png');
  const hash = createHash('sha256').update(base64Data).digest('hex');
  const filename = `${hash}.${extension}`;
  const cachedPath = path.join(CACHE_DIR, filename);

  if (!fs.existsSync(cachedPath)) {
    fs.writeFileSync(cachedPath, Buffer.from(base64Data, 'base64'));
  }

  return cachedPath;
};

const buildBackendImageUrl = (relativePath) => {
  const normalized = relativePath.replace(/^\/+/, '');
  return `http://localhost:3001/${normalized}`;
};

const buildFrontendUrl = (relativePath) => `http://localhost:3000/${relativePath.replace(/^\/+/,'')}`;

const resolveImageSrc = (imagePath) => {
  if (!imagePath) {
    return null;
  }

  if (imagePath.startsWith('data:')) {
    // Keep data URLs inline for PDF reliability while still populating cache for reuse.
    cacheDataUrlImage(imagePath);
    return imagePath;
  }

  if (/^https?:\/\//.test(imagePath)) {
    return imagePath;
  }

  const normalizeToAbsolute = (rawPath) => {
    const sanitized = rawPath.replace(/^\.+/, '').replace(/^\/+/, '');
    return path.join(FRONTEND_PUBLIC_DIR, sanitized);
  };

  const tryServeViaBackend = (rawPath) => {
    const absolutePath = normalizeToAbsolute(rawPath);
    if (fs.existsSync(absolutePath)) {
      const relativeFromPublic = path.relative(FRONTEND_PUBLIC_DIR, absolutePath).replace(/\\/g, '/');
      return buildBackendImageUrl(relativeFromPublic);
    }
    return null;
  };

  if (imagePath.startsWith('/')) {
    const servedUrl = tryServeViaBackend(imagePath);
    if (servedUrl) {
      return servedUrl.startsWith('http://localhost:3001/') ? servedUrl : buildBackendImageUrl(imagePath);
    }
    return buildFrontendUrl(imagePath);
  }

  const servedRelativeUrl = tryServeViaBackend(imagePath);
  if (servedRelativeUrl) {
    return servedRelativeUrl;
  }

  if (!/^https?:\/\//.test(imagePath)) {
    return buildBackendImageUrl(path.join('images', imagePath).replace(/\\/g, '/'));
  }

  return imagePath;
};

const generateCardHTML = (card) => {
  const imageSrc = resolveImageSrc(card.image);
  const categoryStyle = card.categoryColor ? `background-color: ${card.categoryColor};` : '';

  return `
    <div class="card">
      ${imageSrc ? `<img src="${imageSrc}" alt="${card.title}">` : ''}
      <div class="card-content">
        <h2>${card.icon} ${card.title}</h2>
        <p>${card.description}</p>
        <p class="category-label" style="${categoryStyle}"><em>${card.category}</em></p>
      </div>
    </div>
  `;
};

const generateCollectionHTML = (collection) => `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8">
    <title>Impression de la collection : ${collection.name}</title>
    <style>
      body {
        font-family: sans-serif;
        margin: 0;
        padding: 0;
      }
      .page {
        width: 210mm;
        height: 297mm;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(4, 1fr);
        gap: 10px;
        padding: 10px;
        box-sizing: border-box;
        page-break-after: always;
      }
      .card {
        border: none;
        border-radius: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        justify-content: stretch;
        align-items: stretch;
        text-align: center;
        overflow: hidden;
        height: 100%;
        box-shadow: 0 0 0 3px #000;
        margin: 3px;
      }
      .card img {
        width: 100%;
        height: 100%;
        max-width: 120px;
        max-height: 120px;
        object-fit: contain;
        margin-bottom: 0;
        align-self: center;
      }
      .card-content {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 5px;
      }
      .card-content h2 {
        font-size: 14px;
        margin: 0 0 2px 0;
        font-weight: bold;
      }
      .card-content p {
        font-size: 12px;
        margin: 0 0 1px 0;
        line-height: 1.1;
      }
      .category-label {
        color: #ffffff;
        padding: 2px 4px;
        border-radius: 4px;
        display: inline-block;
        margin-top: 4px;
      }
      .card-content p:last-child {
        margin-bottom: 0;
      }
      @media print {
        body {
          -webkit-print-color-adjust: exact;
        }
      }
    </style>
  </head>
  <body>
    ${collection.cards.reduce((acc, card, index) => {
      if (index % 8 === 0) {
        acc += `<div class="page">`;
      }
      acc += generateCardHTML(card);
      if (index % 8 === 7 || index === collection.cards.length - 1) {
        acc += `</div>`;
      }
      return acc;
    }, '')}
  </body>
  </html>
`;

class PdfService {
  static async generatePdf(collection) {
    try {
      return await PdfService.renderPdf(collection, false);
    } catch (error) {
      if (!PdfService.isRecoverableError(error)) {
        throw error;
      }

      console.warn('Primary PDF generation failed, retrying without images:', error.message || error);
      const sanitizedCollection = {
        ...collection,
        cards: collection.cards.map(card => ({ ...card, image: null })),
      };

      return PdfService.renderPdf(sanitizedCollection, true);
    }
  }

  static async renderPdf(collection, isFallback) {
    const userDataDir = createTempUserDataDir();
    const browser = await puppeteer.launch({
      executablePath: await chromium.executablePath(),
      headless: chromium.headless,
      args: chromium.args,
      ignoreHTTPSErrors: true,
      userDataDir,
    });

    try {
      const page = await browser.newPage();
      page.setDefaultNavigationTimeout(0);
      page.setDefaultTimeout(0);
      await page.setViewport({ width: 1191, height: 1684, deviceScaleFactor: 1 });

      const htmlContent = generateCollectionHTML(collection);
      await page.setContent(htmlContent, { waitUntil: 'networkidle0', timeout: 180000 });
      await page.emulateMediaType('screen');
      if (!isFallback) {
        await new Promise(resolve => setTimeout(resolve, 750));
        await page.waitForFunction(() => {
          const images = Array.from(document.querySelectorAll('img'));
          return images.every(img => img.complete || img.naturalWidth > 0);
        }, { timeout: 30000 });
      }

      const pdfBuffer = await page.pdf({ format: 'A4', printBackground: true, timeout: 180000 });
      await page.close();
      return pdfBuffer;
    } finally {
      await browser.close();
      removeDirIfExists(userDataDir);
    }
  }

  static isRecoverableError(error) {
    const message = error?.message || '';
    return message.includes('Target closed') || message.includes('Navigation timeout');
  }
}

module.exports = PdfService;
