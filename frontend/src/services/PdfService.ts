import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { CardData, CardCollection } from '../types/app';
import { getCategoryColor, hexToRgb } from '../constants/categories';

/**
 * Generate a PDF from an array of cards
 * @param cards - Array of cards to include in the PDF
 * @param filename - Name of the PDF file to download
 */
/**
 * Load an image and convert to base64
 */
async function loadImageAsBase64(url: string): Promise<string | null> {
  try {
    const response = await fetch(url);
    const blob = await response.blob();
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.onerror = () => resolve(null);
      reader.readAsDataURL(blob);
    });
  } catch (error) {
    console.error('Failed to load image:', error);
    return null;
  }
}

export async function generatePdfFromCards(
  cards: CardData[],
  filename: string = 'cards-collection.pdf'
): Promise<void> {
  const pdf = new jsPDF('p', 'mm', 'a4');
  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();
  
  // Configuration pour 2 colonnes x 4 lignes = 8 cartes par page
  const margin = 10; // Marge réduite
  const gapBetweenCards = 2; // Espace réduit entre les cartes (2mm)
  const cardsPerRow = 2;
  const cardsPerColumn = 4;
  const cardsPerPage = cardsPerRow * cardsPerColumn; // 8 cartes par page
  
  // Calcul des dimensions des cartes
  const cardWidth = (pageWidth - (2 * margin) - gapBetweenCards) / cardsPerRow;
  const cardHeight = (pageHeight - (2 * margin) - (3 * gapBetweenCards)) / cardsPerColumn;
  
  let cardIndex = 0;

  for (const card of cards) {
    const positionInPage = cardIndex % cardsPerPage;
    
    // Nouvelle page si nécessaire (tous les 8 cartes)
    if (cardIndex > 0 && positionInPage === 0) {
      pdf.addPage();
    }
    
    // Calcul de la position dans la grille
    const col = positionInPage % cardsPerRow;
    const row = Math.floor(positionInPage / cardsPerRow);
    
    const xPos = margin + col * (cardWidth + gapBetweenCards);
    const yPos = margin + row * (cardHeight + gapBetweenCards);

    // Get category color
    const categoryColor = getCategoryColor(card.category);
    const rgb = hexToRgb(categoryColor);
    
    // Draw colored header bar for category
    pdf.setFillColor(rgb.r, rgb.g, rgb.b);
    const headerHeight = 4;
    pdf.rect(xPos, yPos, cardWidth, headerHeight, 'F');
    
    // Draw card border with cut lines
    pdf.setDrawColor(200, 200, 200);
    pdf.setLineWidth(0.5);
    pdf.rect(xPos, yPos, cardWidth, cardHeight);
    
    // Add corner marks for cutting (optional)
    pdf.setDrawColor(150, 150, 150);
    pdf.setLineWidth(0.2);
    const markLength = 3;
    // Top-left corner
    pdf.line(xPos - markLength, yPos, xPos, yPos);
    pdf.line(xPos, yPos - markLength, xPos, yPos);
    // Top-right corner
    pdf.line(xPos + cardWidth, yPos - markLength, xPos + cardWidth, yPos);
    pdf.line(xPos + cardWidth, yPos, xPos + cardWidth + markLength, yPos);
    // Bottom-left corner
    pdf.line(xPos - markLength, yPos + cardHeight, xPos, yPos + cardHeight);
    pdf.line(xPos, yPos + cardHeight, xPos, yPos + cardHeight + markLength);
    // Bottom-right corner
    pdf.line(xPos + cardWidth, yPos + cardHeight, xPos + cardWidth + markLength, yPos + cardHeight);
    pdf.line(xPos + cardWidth, yPos + cardHeight, xPos + cardWidth, yPos + cardHeight + markLength);

    // Add card image if available
    if (card.image) {
      try {
        const imageData = await loadImageAsBase64(card.image);
        if (imageData) {
          const imgSize = Math.min(cardWidth * 0.6, 35);
          const imgX = xPos + (cardWidth - imgSize) / 2;
          const imgY = yPos + headerHeight + 3;
          pdf.addImage(imageData, 'JPEG', imgX, imgY, imgSize, imgSize);
        }
      } catch (error) {
        console.error('Failed to add image to PDF:', error);
      }
    }

    // Add card title
    const titleY = card.image ? yPos + headerHeight + 41 : yPos + headerHeight + 6;
    pdf.setFontSize(10);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(0, 0, 0);
    const titleLines = pdf.splitTextToSize(card.title, cardWidth - 8);
    const maxTitleLines = 2;
    const limitedTitle = titleLines.slice(0, maxTitleLines);
    pdf.text(limitedTitle, xPos + 4, titleY, { maxWidth: cardWidth - 8 });

    // Add card category with colored background
    const categoryY = titleY + (limitedTitle.length * 4.5);
    pdf.setFontSize(7);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(rgb.r, rgb.g, rgb.b);
    pdf.text(card.category, xPos + 4, categoryY);

    // Add card description
    const descY = categoryY + 4;
    pdf.setFontSize(8);
    pdf.setTextColor(0, 0, 0);
    const descriptionLines = pdf.splitTextToSize(card.description, cardWidth - 8);
    const maxDescLines = 3;
    const limitedDesc = descriptionLines.slice(0, maxDescLines);
    pdf.text(limitedDesc, xPos + 4, descY, { maxWidth: cardWidth - 8 });

    cardIndex++;
  }

  pdf.save(filename);
}

/**
 * Generate a PDF from a collection
 * @param collection - Collection to generate PDF from
 */
export async function generatePdfFromCollection(
  collection: CardCollection
): Promise<void> {
  const filename = `${collection.name.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.pdf`;
  
  if (!collection.cards || collection.cards.length === 0) {
    throw new Error('Collection has no cards to print');
  }

  await generatePdfFromCards(collection.cards, filename);
}

/**
 * Generate a PDF by capturing a DOM element
 * @param elementId - ID of the DOM element to capture
 * @param filename - Name of the PDF file to download
 */
export async function generatePdfFromElement(
  elementId: string,
  filename: string = 'document.pdf'
): Promise<void> {
  const element = document.getElementById(elementId);
  
  if (!element) {
    throw new Error(`Element with ID "${elementId}" not found`);
  }

  const canvas = await html2canvas(element, {
    scale: 2,
    useCORS: true,
    logging: false,
  });

  const imgData = canvas.toDataURL('image/png');
  const pdf = new jsPDF('p', 'mm', 'a4');
  const pdfWidth = pdf.internal.pageSize.getWidth();
  const pdfHeight = pdf.internal.pageSize.getHeight();
  const imgWidth = canvas.width;
  const imgHeight = canvas.height;
  const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
  const imgX = (pdfWidth - imgWidth * ratio) / 2;
  const imgY = 10;

  pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
  pdf.save(filename);
}
