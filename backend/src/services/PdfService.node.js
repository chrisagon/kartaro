const fs = require('fs');
const path = require('path');
const { createHash } = require('crypto');
const puppeteer = require('puppeteer-core');
const chromium = require('@sparticuz/chromium-min');
const os = require('os');

const { generateCollectionHTML } = require('./PdfTemplates');

const CACHE_DIR = path.join(os.tmpdir(), 'images');

const ensureBaseUrl = (value, fallback, name) => {
  if (!value) {
    return new URL(fallback).toString();
  }

  try {
    return new URL(value).toString();
  } catch (error) {
    console.warn(`Invalid ${name} "${value}". Falling back to ${fallback}.`, error?.message || error);
    return new URL(fallback).toString();
  }
};

const BACKEND_BASE_URL = ensureBaseUrl(process.env.BACKEND_BASE_URL, 'http://localhost:3001/', 'BACKEND_BASE_URL');
const FRONTEND_BASE_URL = ensureBaseUrl(process.env.FRONTEND_BASE_URL, 'http://localhost:3000/', 'FRONTEND_BASE_URL');

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
  const normalized = relativePath.replace(/^\/+/, '').replace(/\\/g, '/');

  try {
    return new URL(normalized, BACKEND_BASE_URL).toString();
  } catch (error) {
    console.warn('Failed to resolve backend image URL:', error?.message || error);
    const trimmedBase = BACKEND_BASE_URL.replace(/\/+$/, '');
    return `${trimmedBase}/${normalized}`;
  }
};

const buildFrontendUrl = (relativePath) => {
  const normalized = relativePath.replace(/^\/+/, '').replace(/\\/g, '/');

  try {
    return new URL(normalized, FRONTEND_BASE_URL).toString();
  } catch (error) {
    console.warn('Failed to resolve frontend asset URL:', error?.message || error);
    const trimmedBase = FRONTEND_BASE_URL.replace(/\/+$/, '');
    return `${trimmedBase}/${normalized}`;
  }
};

const resolveImageSrc = (imagePath, options = {}) => {
  const { assetBaseUrl } = options;

  if (!imagePath) {
    return null;
  }

  if (imagePath.startsWith('data:')) {
    cacheDataUrlImage(imagePath);
    return imagePath;
  }

  if (/^https?:\/\//.test(imagePath)) {
    return imagePath;
  }

  if (assetBaseUrl) {
    const normalizedPath = imagePath.replace(/^\/+/, '');
    try {
      return new URL(normalizedPath, assetBaseUrl).toString();
    } catch (error) {
      console.warn('Failed to resolve image against assetBaseUrl:', error?.message || error);
    }
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
      return servedUrl;
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

const prepareCollectionForHtml = (collection, options = {}) => ({
  ...collection,
  cards: (collection.cards || []).map((card) => ({
    ...card,
    image: resolveImageSrc(card.image, options),
  })),
});

class PdfService {
  static async generatePdf(collection, options = {}) {
    try {
      return await PdfService.renderPdf(collection, false, options);
    } catch (error) {
      if (!PdfService.isRecoverableError(error)) {
        throw error;
      }

      console.warn('Primary PDF generation failed, retrying without images:', error.message || error);
      const sanitizedCollection = {
        ...collection,
        cards: collection.cards.map(card => ({ ...card, image: null })),
      };

      return PdfService.renderPdf(sanitizedCollection, true, options);
    }
  }

  static async renderPdf(collection, isFallback, options = {}) {
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

      const htmlContent = generateCollectionHTML(prepareCollectionForHtml(collection, options));
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
