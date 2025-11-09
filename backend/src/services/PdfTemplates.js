const generateCardHTML = (card) => {
  const categoryStyle = card.categoryColor ? `background-color: ${card.categoryColor};` : '';
  const imageMarkup = card.image
    ? `<img src="${card.image}" alt="${card.title}">`
    : '';

  return `
    <div class="card">
      ${imageMarkup}
      <div class="card-content">
        <h2>${card.icon || ''} ${card.title || ''}</h2>
        <p>${card.description || ''}</p>
        <p class="category-label" style="${categoryStyle}"><em>${card.category || ''}</em></p>
      </div>
    </div>
  `;
};

const escapeHtml = (value = '') =>
  value
    .toString()
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const generateCollectionHTML = (collection) => {
  const theme = escapeHtml(collection.theme || collection.name || 'Collection');
  const publicTarget = escapeHtml(collection.publicTarget || 'General audience');
  const context = escapeHtml(collection.context || '');
  const description = escapeHtml(collection.description || '');

  const cardPages = (collection.cards || []).reduce((acc, card, index) => {
    if (index % 8 === 0) {
      acc += '<div class="page cards-page">';
    }
    acc += generateCardHTML(card);
    if (index % 8 === 7 || index === (collection.cards || []).length - 1) {
      acc += '</div>';
    }
    return acc;
  }, '');

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <title>Impression de la collection : ${escapeHtml(collection.name || '')}</title>
      <style>
        body { font-family: 'Segoe UI', Tahoma, sans-serif; margin: 0; padding: 0; color: #1f2933; }
        .page {
          width: 210mm;
          height: 297mm;
          box-sizing: border-box;
          page-break-after: always;
        }
        .cover-page {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 40mm 30mm;
          background: linear-gradient(135deg, #f97316 0%, #fb923c 100%);
          color: #ffffff;
          text-align: center;
        }
        .cover-page h1 {
          font-size: 28pt;
          margin-bottom: 12mm;
          text-transform: uppercase;
          letter-spacing: 1.5px;
        }
        .cover-page .subtitle {
          font-size: 16pt;
          margin-bottom: 10mm;
        }
        .cover-section {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 10mm;
          max-width: 140mm;
          width: 100%;
          text-align: left;
          backdrop-filter: blur(6px);
        }
        .cover-section h2 {
          font-size: 14pt;
          margin: 0 0 4mm 0;
        }
        .cover-section p {
          font-size: 12pt;
          line-height: 1.6;
          white-space: pre-wrap;
        }
        .cards-page {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-template-rows: repeat(4, 1fr);
          gap: 10px;
          padding: 10px;
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
          background: #ffffff;
        }
        .card img { width: 100%; height: 100%; max-width: 120px; max-height: 120px; object-fit: contain; margin-bottom: 0; align-self: center; }
        .card-content { flex: 1; display: flex; flex-direction: column; justify-content: center; padding: 5px; }
        .card-content h2 { font-size: 14px; margin: 0 0 2px 0; font-weight: bold; }
        .card-content p { font-size: 12px; margin: 0 0 1px 0; line-height: 1.1; }
        .category-label { color: #ffffff; padding: 2px 4px; border-radius: 4px; display: inline-block; margin-top: 4px; }
        .card-content p:last-child { margin-bottom: 0; }
        @media print { body { -webkit-print-color-adjust: exact; } }
      </style>
    </head>
    <body>
      <div class="page cover-page">
        <h1>${theme}</h1>
        <div class="subtitle">Target audience: ${publicTarget}</div>
        <div class="cover-section">
          <h2>Context</h2>
          <p>${context || 'No additional context provided.'}</p>
        </div>
        ${description ? `<div class="cover-section" style="margin-top: 6mm;"><h2>Description</h2><p>${description}</p></div>` : ''}
      </div>
      ${cardPages}
    </body>
    </html>
  `;
};

module.exports = {
  generateCollectionHTML,
};
