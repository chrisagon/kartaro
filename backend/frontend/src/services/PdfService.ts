import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { CardData, CardCollection } from '../types/app';
import { getCategoryColor, hexToRgb } from '../constants/categories';

// Configuration de compression
const COMPRESSION_CONFIG = {
  // Qualité JPEG pour les images (0.1 = très compressé, 1.0 = haute qualité)
  imageQuality: 0.7,
  // Taille maximale des images en pixels (pour le redimensionnement)
  maxImageSize: 512,
  // Activer/désactiver la compression (pour les tests)
  enableCompression: true,
  // Niveau de compression PDF (0 = pas de compression, 9 = compression maximale)
  pdfCompression: 6,
};

/**
 * Compress and resize an image from base64 data URL
 * @param dataUrl - Base64 data URL of the image
 * @param config - Compression configuration
 * @returns Compressed base64 data URL
 */
async function compressImage(dataUrl: string, config: { imageQuality: number; maxImageSize: number }): Promise<string | null> {
  if (!config) {
    return dataUrl;
  }

  try {
    // Convert base64 to blob
    const response = await fetch(dataUrl);
    const blob = await response.blob();

    return new Promise((resolve) => {
      const img = new Image();
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');

      if (!ctx) {
        resolve(dataUrl);
        return;
      }

      img.onload = () => {
        const originalWidth = img.naturalWidth || img.width;
        const originalHeight = img.naturalHeight || img.height;

        console.log(`🔍 Image source: ${originalWidth}x${originalHeight}`);

        // Calculate new dimensions (maintain aspect ratio)
        let { width, height } = img;

        if (width > height) {
          if (width > config.maxImageSize) {
            height = (height * config.maxImageSize) / width;
            width = config.maxImageSize;
          }
        } else {
          if (height > config.maxImageSize) {
            width = (width * config.maxImageSize) / height;
            height = config.maxImageSize;
          }
        }

        // Set canvas dimensions
        canvas.width = width;
        canvas.height = height;

        // SOLUTION: Just draw the image normally - no orientation correction needed
        console.log(`📐 Dessin simple de l'image: ${width}x${height}`);
        ctx.drawImage(img, 0, 0, width, height);
        console.log(`✅ Image traitée: ${width}x${height}`);

        // Convert to JPEG with compression
        const compressedDataUrl = canvas.toDataURL('image/jpeg', config.imageQuality);
        console.log(`📦 Image compressée: ${width}x${height} (${Math.round(config.imageQuality * 100)}%)`);
        resolve(compressedDataUrl);
      };

      img.onerror = () => {
        console.error('❌ Erreur de chargement de l\'image');
        resolve(dataUrl);
      };
      img.src = URL.createObjectURL(blob);
    });
  } catch (error) {
    console.error('❌ Erreur lors de la compression:', error);
    return dataUrl;
  }
}

/**
 * Load an image and convert to base64 with compression
 */
async function loadImageAsBase64(url: string, config: { imageQuality: number; maxImageSize: number }): Promise<string | null> {
  try {
    const response = await fetch(url);
    const blob = await response.blob();
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = async () => {
        const dataUrl = reader.result as string;
        const compressedDataUrl = await compressImage(dataUrl, config);
        resolve(compressedDataUrl);
      };
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
  filename: string = 'cards-collection.pdf',
  compressionConfig?: { imageQuality: number; maxImageSize: number }
): Promise<void> {
  const pdf = new jsPDF({
    orientation: 'p',
    unit: 'mm',
    format: 'a4',
    compress: true,
    putOnlyUsedFonts: true,
    floatPrecision: 16,
  });

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
  
  // Utiliser la configuration de compression fournie ou les valeurs par défaut
  const finalConfig = compressionConfig || COMPRESSION_CONFIG;
  console.log(`🗜️ Configuration de compression: ${Math.round(finalConfig.imageQuality * 100)}% qualité, max ${finalConfig.maxImageSize}px`);
  
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
        console.log(`🖼️ Traitement de l'image pour la carte: "${card.title.substring(0, 30)}..."`);

        const imageData = await loadImageAsBase64(card.image, finalConfig);
        if (imageData) {
          const imgSize = Math.min(cardWidth * 0.6, 35);
          const imgX = xPos + (cardWidth - imgSize) / 2;
          const imgY = yPos + headerHeight + 3;

          console.log(`📐 Ajout de l'image au PDF: ${imgSize}x${imgSize} à la position (${imgX}, ${imgY})`);

          // Add image to PDF with explicit parameters
          pdf.addImage(
            imageData,
            'JPEG',
            imgX,
            imgY,
            imgSize,
            imgSize,
            `card-${cardIndex}-image`, // Unique name for each image
            'FAST' // FAST for speed
          );

          console.log(`✅ Image ajoutée pour "${card.title.substring(0, 20)}..." (${imgSize}px, qualité ${Math.round(finalConfig.imageQuality * 100)}%)`);
        } else {
          console.warn(`⚠️ Aucune donnée d'image pour "${card.title.substring(0, 20)}..."`);
        }
      } catch (error) {
        console.error(`❌ Erreur lors de l'ajout de l'image pour "${card.title.substring(0, 20)}...":`, error);
        // Continue without image rather than failing completely
      }
    } else {
      console.log(`ℹ️ Aucune image disponible pour "${card.title.substring(0, 20)}..."`);
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

  // Calcul du nombre total de pages
  const totalPages = Math.ceil(cards.length / cardsPerPage);
  console.log(`📄 Génération du PDF terminée: ${totalPages} page(s) pour ${cards.length} cartes`);
  console.log(`🗜️ Compression activée: Images ${Math.round(finalConfig.imageQuality * 100)}%, Taille max: ${finalConfig.maxImageSize}px`);

  // Sauvegarder le PDF avec compression
  pdf.save(filename);

  // Calcul approximatif de la taille du PDF (pour logging)
  try {
    const pdfOutput = pdf.output('blob');
    const sizeKB = Math.round(pdfOutput.size / 1024);
    const sizeMB = parseFloat((pdfOutput.size / (1024 * 1024)).toFixed(2));
    console.log(`💾 Taille du PDF généré: ${sizeKB} Ko (${sizeMB} Mo)`);

    if (sizeMB < 1) {
      console.log(`✅ Excellente compression! PDF optimisé à moins de 1 Mo`);
    } else if (sizeMB < 5) {
      console.log(`✅ Bonne compression! PDF de taille raisonnable`);
    } else {
      console.log(`⚠️ PDF volumineux détecté. Envisagez de réduire la qualité d'image.`);
    }
  } catch (error) {
    console.warn('Impossible de calculer la taille du PDF:', error);
  }
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
