import React, { useState } from 'react';
import { Button } from '@mui/material';
import { CardData } from '../types/app';
import { generatePdfFromCards } from '../services/PdfService';
import Card from './Card';
import { CardEditModal } from './CardEditModal';
import './CardGrid.css';

interface CardGridProps {
  cards: CardData[];
  theme?: string;
  context?: string;
  publicTarget?: string;
  description?: string;
  onUpdateCard?: (index: number, updatedCard: CardData) => void;
}

const CardGrid: React.FC<CardGridProps> = ({ cards, theme, context, publicTarget, description, onUpdateCard }) => {
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
      await generatePdfFromCards(cards, {
        metadata: (theme || context || publicTarget) ? {
          theme: theme ?? '',
          publicTarget: publicTarget ?? '',
          context: context ?? '',
        } : undefined,
        name: theme,
        description,
      });
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
        <h3>Deck de cartes ({cards.length})</h3>
        <Button variant="contained" color="primary" onClick={generatePdf} disabled={isGeneratingPdf || cards.length === 0}>
          {isGeneratingPdf ? (
            <>
              <span className="spinner"></span>
              Imprimer PDF...
            </>
          ) : (
            'Imprimer PDF'
          )}
        </Button>
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
