import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { CardData, CardCollection, GenerationMetadata, GeneratePdfOptions } from '../types/app';
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

interface GenerateCardsPdfOptions extends GeneratePdfOptions {
  filename?: string;
  compressionConfig?: { imageQuality: number; maxImageSize: number };
}

const COVER_COLORS = {
  accent: { r: 231, g: 116, b: 9 },
  background: { r: 255, g: 255, b: 255 },
  panelFill: { r: 255, g: 255, b: 255 },
  panelBorder: { r: 226, g: 232, b: 240 },
  panelText: { r: 31, g: 41, b: 51 },
  subtitle: { r: 100, g: 116, b: 139 },
};

const DEFAULT_STRINGS = {
  title: 'Collection',
  publicTarget: 'General audience',
  contextFallback: 'No additional context provided.',
};

const LINE_HEIGHT = 6;
const BULLET_INDENT = 4;

const HEADING_FONT_SIZES: Record<number, number> = {
  1: 20,
  2: 17,
  3: 14,
  4: 12,
  5: 11,
  6: 11,
};

const getHeadingFontSize = (level: number) => HEADING_FONT_SIZES[level] ?? 11;

interface TextSegment {
  text: string;
  bold: boolean;
}

interface FormattedLine {
  segments: TextSegment[];
  bullet: boolean;
  indent: boolean;
  headingLevel?: number;
}

const appendSegment = (segments: TextSegment[], segment: TextSegment) => {
  if (!segment.text) {
    return;
  }

  const last = segments[segments.length - 1];
  if (last && last.bold === segment.bold) {
    last.text += segment.text;
  } else {
    segments.push({ ...segment });
  }
};

const parseBoldSegments = (text: string): TextSegment[] => {
  if (!text) {
    return [];
  }

  const segments: TextSegment[] = [];
  const regex = /\*\*(.+?)\*\*/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      appendSegment(segments, { text: text.slice(lastIndex, match.index), bold: false });
    }
    appendSegment(segments, { text: match[1], bold: true });
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    appendSegment(segments, { text: text.slice(lastIndex), bold: false });
  }

  return segments.length > 0 ? segments : [{ text, bold: false }];
};

const wrapSegments = (
  pdf: jsPDF,
  segments: TextSegment[],
  availableWidth: number
): TextSegment[][] => {
  if (segments.length === 0) {
    return [[]];
  }

  const lines: TextSegment[][] = [];
  let currentSegments: TextSegment[] = [];
  let currentWidth = 0;

  const pushLine = () => {
    if (currentSegments.length === 0) {
      lines.push([]);
    } else {
      lines.push(currentSegments);
    }
    currentSegments = [];
    currentWidth = 0;
  };

  const addToken = (token: string, bold: boolean) => {
    if (!token) {
      return;
    }

    appendSegment(currentSegments, { text: token, bold });
    pdf.setFont('helvetica', bold ? 'bold' : 'normal');
    currentWidth += pdf.getTextWidth(token);
  };

  for (const segment of segments) {
    const tokens = segment.text.split(/(\s+)/);

    for (const token of tokens) {
      if (!token) {
        continue;
      }

      pdf.setFont('helvetica', segment.bold ? 'bold' : 'normal');
      const tokenWidth = pdf.getTextWidth(token);

      if (token.trim().length === 0) {
        if (currentSegments.length === 0) {
          continue;
        }
        if (currentWidth + tokenWidth > availableWidth) {
          pushLine();
          continue;
        }
        addToken(token, segment.bold);
        continue;
      }

      if (tokenWidth > availableWidth) {
        const parts = pdf.splitTextToSize(token, availableWidth) as string[];
        for (const part of parts) {
          if (currentWidth + pdf.getTextWidth(part) > availableWidth && currentSegments.length > 0) {
            pushLine();
          }
          addToken(part, segment.bold);
        }
        continue;
      }

      if (currentWidth + tokenWidth > availableWidth && currentSegments.length > 0) {
        pushLine();
      }

      addToken(token, segment.bold);
    }
  }

  if (currentSegments.length > 0 || lines.length === 0) {
    pushLine();
  }

  return lines;
};

const prepareMarkdownLines = (
  pdf: jsPDF,
  text: string,
  maxWidth: number
): FormattedLine[] => {
  if (!text) {
    return [];
  }

  const normalized = text.replace(/\r\n/g, '\n');
  const rawLines = normalized.split('\n');
  const formatted: FormattedLine[] = [];

  for (const rawLine of rawLines) {
    const trimmed = rawLine.trim();

    if (!trimmed) {
      formatted.push({ segments: [], bullet: false, indent: false });
      continue;
    }

    const headingMatch = trimmed.match(/^(#{1,6})\s+/);
    const headingLevel = headingMatch ? headingMatch[1].length : 0;
    const isHeading = headingLevel > 0;
    const isBullet = !isHeading && /^[-*+]\s+/.test(trimmed);

    const content = isHeading
      ? trimmed.slice(headingMatch?.[0].length ?? 0)
      : isBullet
        ? trimmed.replace(/^[-*+]\s+/, '')
        : rawLine;
    const segments = parseBoldSegments(content);
    const availableWidth = isBullet ? maxWidth - BULLET_INDENT : maxWidth;
    const wrapped = wrapSegments(pdf, segments, Math.max(availableWidth, 1));

    wrapped.forEach((lineSegments, index) => {
      formatted.push({
        segments: lineSegments,
        bullet: isBullet && index === 0,
        indent: isBullet,
        headingLevel: isHeading ? headingLevel : undefined,
      });
    });
  }

  return formatted;
};

const renderFormattedLinesWithinHeight = (
  pdf: jsPDF,
  lines: FormattedLine[],
  x: number,
  startY: number,
  bottomY: number,
  maxWidth: number,
  lineHeight: number = LINE_HEIGHT,
) => {
  if (lines.length === 0 || startY > bottomY) {
    return { remainingLines: [...lines], nextY: startY };
  }

  let y = startY;
  let index = 0;
  const defaultFontSize = pdf.getFontSize();

  while (index < lines.length) {
    if (y > bottomY) {
      break;
    }

    const line = lines[index];
    const indentOffset = line.indent ? BULLET_INDENT : 0;
    let currentX = x + indentOffset;
    const isHeading = typeof line.headingLevel === 'number';
    const headingFontSize = isHeading ? getHeadingFontSize(line.headingLevel as number) : defaultFontSize;
    let lineSpacing = lineHeight;

    if (isHeading) {
      const spacingFromFont = Math.max(lineHeight + 2, headingFontSize * 0.6);
      lineSpacing = Math.max(lineSpacing, spacingFromFont);
      pdf.setFontSize(headingFontSize);
    } else {
      pdf.setFontSize(defaultFontSize);
    }

    if (line.bullet) {
      pdf.setFont('helvetica', 'bold');
      pdf.text('•', x + 1, y);
    }

    if (line.segments.length === 0) {
      y += lineSpacing;
      pdf.setFontSize(defaultFontSize);
      index += 1;
      continue;
    }

    for (const segment of line.segments) {
      const shouldBold = isHeading || segment.bold;
      pdf.setFont('helvetica', shouldBold ? 'bold' : 'normal');
      pdf.text(segment.text, currentX, y, { maxWidth });
      currentX += pdf.getTextWidth(segment.text);
    }

    y += lineSpacing;
    pdf.setFontSize(defaultFontSize);
    index += 1;
  }

  return {
    remainingLines: lines.slice(index),
    nextY: y,
  };
};

const drawContextContinuationPage = (
  pdf: jsPDF,
  contextLines: FormattedLine[],
  descriptionLines: FormattedLine[],
  descriptionHeadingAlreadyPrinted: boolean
) => {
  const remainingContext = [...contextLines];
  const remainingDescription = [...descriptionLines];
  let descriptionHeadingPrinted = descriptionHeadingAlreadyPrinted;

  const width = pdf.internal.pageSize.getWidth();
  const height = pdf.internal.pageSize.getHeight();
  const margin = 20;
  const contentWidth = width - margin * 2;
  const bottomY = height - margin;

  pdf.setFillColor(COVER_COLORS.background.r, COVER_COLORS.background.g, COVER_COLORS.background.b);
  pdf.rect(0, 0, width, height, 'F');

  pdf.setTextColor(COVER_COLORS.panelText.r, COVER_COLORS.panelText.g, COVER_COLORS.panelText.b);

  let currentY = margin;

  if (remainingContext.length > 0) {
    pdf.setFont('helvetica', 'bold');
    pdf.setFontSize(14);
    pdf.text('Context (continued)', margin, currentY);
    currentY += 10;

    pdf.setFont('helvetica', 'normal');
    pdf.setFontSize(11);

    const contextResult = renderFormattedLinesWithinHeight(
      pdf,
      remainingContext,
      margin,
      currentY,
      bottomY,
      contentWidth
    );

    remainingContext.splice(0, remainingContext.length, ...contextResult.remainingLines);
    currentY = contextResult.nextY + 5;
  }

  if (remainingContext.length > 0) {
    return {
      remainingContextLines: remainingContext,
      remainingDescriptionLines: remainingDescription,
      descriptionHeadingPrinted,
    };
  }

  if (remainingDescription.length > 0 && currentY <= bottomY) {
    pdf.setFont('helvetica', 'bold');
    pdf.setFontSize(14);
    const headingLabel = descriptionHeadingPrinted ? 'Description (continued)' : 'Description';
    pdf.text(headingLabel, margin, currentY);
    descriptionHeadingPrinted = true;
    currentY += 10;

    pdf.setFont('helvetica', 'normal');
    pdf.setFontSize(11);

    const descriptionResult = renderFormattedLinesWithinHeight(
      pdf,
      remainingDescription,
      margin,
      currentY,
      bottomY,
      contentWidth
    );

    remainingDescription.splice(0, remainingDescription.length, ...descriptionResult.remainingLines);
  }

  return {
    remainingContextLines: remainingContext,
    remainingDescriptionLines: remainingDescription,
    descriptionHeadingPrinted,
  };
};

const drawCoverPage = (
  pdf: jsPDF,
  metadata: GenerationMetadata | null | undefined,
  description?: string,
  explicitName?: string
) => {
  const width = pdf.internal.pageSize.getWidth();
  const height = pdf.internal.pageSize.getHeight();
  const margin = 20;

  const panelPadding = 12;

  const theme = metadata?.theme?.trim() || explicitName || DEFAULT_STRINGS.title;
  const publicTarget = metadata?.publicTarget?.trim() || DEFAULT_STRINGS.publicTarget;
  const context = metadata?.context?.trim() || DEFAULT_STRINGS.contextFallback;

  pdf.setFillColor(COVER_COLORS.background.r, COVER_COLORS.background.g, COVER_COLORS.background.b);
  pdf.rect(0, 0, width, height, 'F');

  // Title
  pdf.setTextColor(COVER_COLORS.accent.r, COVER_COLORS.accent.g, COVER_COLORS.accent.b);
  pdf.setFont('helvetica', 'bold');
  pdf.setFontSize(26);
  const titleLines = pdf.splitTextToSize(theme.toUpperCase(), width - margin * 2);
  pdf.text(titleLines, width / 2, margin + 12, { align: 'center' });

  // Subtitle (target audience)
  pdf.setFontSize(14);
  pdf.setFont('helvetica', 'normal');
  pdf.setTextColor(COVER_COLORS.subtitle.r, COVER_COLORS.subtitle.g, COVER_COLORS.subtitle.b);
  pdf.text(`Target audience: ${publicTarget}`, width / 2, margin + 30, { align: 'center' });

  // Panel for context / description
  const panelX = margin;
  let panelY = margin + 45;
  const panelWidth = width - margin * 2;
  let panelHeight = height - panelY - margin;

  pdf.setFillColor(COVER_COLORS.panelFill.r, COVER_COLORS.panelFill.g, COVER_COLORS.panelFill.b);
  pdf.setDrawColor(COVER_COLORS.panelBorder.r, COVER_COLORS.panelBorder.g, COVER_COLORS.panelBorder.b);
  pdf.roundedRect(panelX, panelY, panelWidth, panelHeight, 6, 6, 'FD');

  pdf.setTextColor(COVER_COLORS.panelText.r, COVER_COLORS.panelText.g, COVER_COLORS.panelText.b);
  pdf.setFont('helvetica', 'bold');
  pdf.setFontSize(14);
  pdf.text('Context', panelX + panelPadding, panelY + 18);

  pdf.setFont('helvetica', 'normal');
  pdf.setFontSize(11);
  const contextLines = prepareMarkdownLines(pdf, context, panelWidth - panelPadding * 2);
  const panelBottom = panelY + panelHeight - panelPadding;

  const contextResult = renderFormattedLinesWithinHeight(
    pdf,
    contextLines,
    panelX + panelPadding,
    panelY + 30,
    panelBottom,
    panelWidth - panelPadding * 2
  );

  const remainingContextLines = contextResult.remainingLines;
  let currentY = contextResult.nextY;

  const descriptionLines = description && description.trim()
    ? prepareMarkdownLines(pdf, description.trim(), panelWidth - panelPadding * 2)
    : [];

  let remainingDescriptionLines = [...descriptionLines];
  let descriptionHeadingPrinted = false;

  if (descriptionLines.length > 0 && remainingContextLines.length === 0) {
    const headingY = currentY + 8;

    if (headingY + 10 <= panelBottom) {
      pdf.setFont('helvetica', 'bold');
      pdf.setFontSize(14);
      pdf.text('Description', panelX + panelPadding, headingY);

      pdf.setFont('helvetica', 'normal');
      pdf.setFontSize(11);

      const descriptionResult = renderFormattedLinesWithinHeight(
        pdf,
        descriptionLines,
        panelX + panelPadding,
        headingY + 10,
        panelBottom,
        panelWidth - panelPadding * 2
      );

      remainingDescriptionLines = descriptionResult.remainingLines;
      currentY = descriptionResult.nextY;
      descriptionHeadingPrinted = true;
    }
  }

  return {
    remainingContextLines,
    remainingDescriptionLines,
    descriptionHeadingPrinted,
  };
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
  options: GenerateCardsPdfOptions = {}
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
  const finalConfig = options.compressionConfig || COMPRESSION_CONFIG;
  const filename = options.filename || `${(options.name || options.metadata?.theme || 'cards').replace(/[^a-z0-9]+/gi, '-').toLowerCase()}-${Date.now()}.pdf`;

  const coverResult = drawCoverPage(pdf, options.metadata ?? null, options.description, options.name);

  let remainingContextLines = coverResult.remainingContextLines;
  let remainingDescriptionLines = coverResult.remainingDescriptionLines;
  let descriptionHeadingPrinted = coverResult.descriptionHeadingPrinted;

  while (remainingContextLines.length > 0 || remainingDescriptionLines.length > 0) {
    pdf.addPage();
    const continuationResult = drawContextContinuationPage(
      pdf,
      remainingContextLines,
      remainingDescriptionLines,
      descriptionHeadingPrinted
    );
    remainingContextLines = continuationResult.remainingContextLines;
    remainingDescriptionLines = continuationResult.remainingDescriptionLines;
    descriptionHeadingPrinted = continuationResult.descriptionHeadingPrinted;
  }

  if (cards.length > 0) {
    pdf.addPage();
  }
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
  if (!collection.cards || collection.cards.length === 0) {
    throw new Error('Collection has no cards to print');
  }

  await generatePdfFromCards(collection.cards, {
    name: collection.name,
    description: collection.description,
    metadata: {
      theme: collection.theme ?? collection.name ?? 'Collection',
      publicTarget: collection.publicTarget ?? '',
      context: collection.context ?? '',
    },
  });
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
