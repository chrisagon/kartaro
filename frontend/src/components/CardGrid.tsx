import React, { useState } from 'react';
import { CardData } from '../types/app';
import * as ApiService from '../services/ApiService';
import Card from './Card';
import { CardEditModal } from './CardEditModal';
import './CardGrid.css';

interface CardGridProps {
  cards: CardData[];
  theme?: string;
  context?: string;
  onUpdateCard?: (index: number, updatedCard: CardData) => void;
}

const CardGrid: React.FC<CardGridProps> = ({ cards, theme, context, onUpdateCard }) => {
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);
  const [editingCard, setEditingCard] = useState<{ card: CardData; index: number } | null>(null);

  const handleEditCard = (card: CardData, index: number) => {
    setEditingCard({ card, index });
  };

  const handleSaveCard = (updatedCard: CardData) => {
    if (editingCard && onUpdateCard) {
      onUpdateCard(editingCard.index, updatedCard);
    }
    setEditingCard(null);
  };

  const generatePdf = async () => {
    if (cards.length === 0 || isGeneratingPdf) return;

    setIsGeneratingPdf(true);
    try {
      const pdfBlob = await ApiService.generatePdfForCards(cards);

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
            'Download PDF 1'
          )}
        </button>
      </div>
      <div className="card-grid">
        {cards.map((card, index) => (
          <Card 
            key={card.id} 
            card={card} 
            onEdit={() => handleEditCard(card, index)}
          />
        ))}
      </div>

      {/* Modal d'édition */}
      <CardEditModal
        open={editingCard !== null}
        card={editingCard?.card || null}
        theme={theme}
        context={context}
        onClose={() => setEditingCard(null)}
        onSave={handleSaveCard}
      />
    </div>
  );
};

export default CardGrid;
