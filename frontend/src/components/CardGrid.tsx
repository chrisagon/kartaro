import React, { useState } from 'react';
import { Card as CardData, generatePdfForCards } from '../services/ApiService';
import Card from './Card';
import './CardGrid.css';

interface CardGridProps {
  cards: CardData[];
}

const CardGrid: React.FC<CardGridProps> = ({ cards }) => {
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);

  const generatePdf = async () => {
    if (cards.length === 0 || isGeneratingPdf) return;

    setIsGeneratingPdf(true);
    try {
      const pdfBlob = await generatePdfForCards(cards);

      // Télécharger le PDF
      const url = window.URL.createObjectURL(pdfBlob);
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = url;
      a.download = `generated-cards-${Date.now()}.pdf`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Failed to generate PDF. Please try again.');
    } finally {
      setIsGeneratingPdf(false);
    }
  };

  if (cards.length === 0) {
    return null;
  }

  return (
    <div className="card-grid-container">
      <div className="card-grid-header">
        <h3>Generated Cards ({cards.length})</h3>
        <button
          onClick={generatePdf}
          disabled={isGeneratingPdf || cards.length === 0}
          className="pdf-button"
        >
          {isGeneratingPdf ? (
            <>
              <span className="spinner"></span>
              Generating PDF...
            </>
          ) : (
            'Download PDF'
          )}
        </button>
      </div>
      <div className="card-grid">
        {cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
