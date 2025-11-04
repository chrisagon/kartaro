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

const generateCollectionHTML = (collection) => `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8">
    <title>Impression de la collection : ${collection.name || ''}</title>
    <style>
      body { font-family: sans-serif; margin: 0; padding: 0; }
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
    ${(collection.cards || []).reduce((acc, card, index) => {
      if (index % 8 === 0) {
        acc += '<div class="page">';
      }
      acc += generateCardHTML(card);
      if (index % 8 === 7 || index === (collection.cards || []).length - 1) {
        acc += '</div>';
      }
      return acc;
    }, '')}
  </body>
  </html>
`;

module.exports = {
  generateCollectionHTML,
};
