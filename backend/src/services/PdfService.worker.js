const { generateCollectionHTML } = require('./PdfTemplates');

const resolveImageSrc = (imagePath, options = {}) => {
  const { assetBaseUrl } = options;

  if (!imagePath) {
    return null;
  }

  if (imagePath.startsWith('data:')) {
    return imagePath;
  }

  if (/^https?:\/\//.test(imagePath)) {
    return imagePath;
  }

  if (!assetBaseUrl) {
    return imagePath;
  }

  const normalizedPath = imagePath.replace(/^\/+/, '');
  try {
    return new URL(normalizedPath, assetBaseUrl).toString();
  } catch (error) {
    console.warn('Failed to resolve image against assetBaseUrl in worker runtime:', error?.message || error);
    return imagePath;
  }
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
    const { env, assetBaseUrl, renderOptions = {} } = options;

    if (!env || typeof env.BROWSER?.render !== 'function') {
      throw new Error('Missing Cloudflare Browser Rendering binding "BROWSER" in env.');
    }

    const html = generateCollectionHTML(prepareCollectionForHtml(collection, { assetBaseUrl }));

    const browserResponse = await env.BROWSER.render({
      html,
      waitUntil: renderOptions.waitUntil || 'networkidle',
      pdf: {
        page: 'A4',
        landscape: false,
        printBackground: true,
        ...renderOptions.pdf,
      },
    });

    if (!browserResponse || !browserResponse.ok) {
      const statusText = browserResponse ? `${browserResponse.status} ${browserResponse.statusText}` : 'unknown error';
      throw new Error(`Cloudflare Browser Rendering failed: ${statusText}`);
    }

    return browserResponse.arrayBuffer();
  }
}

module.exports = PdfService;
