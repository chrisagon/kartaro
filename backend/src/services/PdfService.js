const puppeteer = require('puppeteer');

const generateCardHTML = (card) => `
  <div class="card">
    ${card.image ? `<img src="http://localhost:3000${card.image}" alt="${card.title}">` : ''}
    <div class="card-content">
      <h2>${card.icon} ${card.title}</h2>
      <p>${card.description}</p>
      <p><em>${card.category}</em></p>
    </div>
  </div>
`;

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
        grid-template-rows: repeat(3, 1fr);
        gap: 10px;
        padding: 10px;
        box-sizing: border-box;
        page-break-after: always;
      }
      .card {
        border: 1px solid #ccc;
        border-radius: 8px;
        padding: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        overflow: hidden;
      }
      .card img {
        max-width: 80%;
        max-height: 100px;
        object-fit: contain;
        margin-bottom: 10px;
      }
      .card-content h2 {
        font-size: 14px;
        margin: 5px 0;
      }
      .card-content p {
        font-size: 10px;
        margin: 5px 0;
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
      if (index % 6 === 0) {
        acc += `<div class="page">`;
      }
      acc += generateCardHTML(card);
      if (index % 6 === 5 || index === collection.cards.length - 1) {
        acc += `</div>`;
      }
      return acc;
    }, '')}
  </body>
  </html>
`;

class PdfService {
  static async generatePdf(collection) {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    const htmlContent = generateCollectionHTML(collection);

    await page.setContent(htmlContent, { waitUntil: 'networkidle0' });
    const pdfBuffer = await page.pdf({ format: 'A4', printBackground: true });

    await browser.close();
    return pdfBuffer;
  }
}

module.exports = PdfService;
