import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CardData, CardCollection, GenerateCardsMetrics } from '../types/app';
import * as ApiService from '../services/ApiService';
import { generatePdfFromCards } from '../services/PdfService';
import InputForm from '../components/InputForm';
import CardGrid from '../components/CardGrid';
import CardEditor from '../components/CardEditor';
import CollectionManager from '../components/CollectionManager';
import CollectionList from '../components/CollectionList';

const MainPage: React.FC = () => {
  const [cards, setCards] = useState<CardData[]>([]);
  const [selectedCard, setSelectedCard] = useState<CardData | null>(null);
  const [collections, setCollections] = useState<CardCollection[]>([]);
  const [currentCollection, setCurrentCollection] = useState<CardCollection | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);
  const [isSavingQuick, setIsSavingQuick] = useState(false);
  const [metrics, setMetrics] = useState<GenerateCardsMetrics | null>(null);

  // Fetch collections on component mount
  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const fetchedCollections = await ApiService.getCollections();
        setCollections(fetchedCollections);
      } catch (error) {
        console.error('Failed to fetch collections');
        alert('Failed to load existing collections.');
      }
    };

    fetchCollections();
  }, []);

  const handleGenerate = async (theme: string, context: string) => {
    setIsGenerating(true);
    try {
      const result = await ApiService.generateCards(theme, context);
      if (Array.isArray(result?.cards)) {
        setCards(result.cards);
        setMetrics(result.metrics);
      } else {
        alert('Received an invalid response from the server.');
        setCards([]);
        setMetrics(null);
      }
    } catch (error) {
      alert('Failed to generate cards');
      setCards([]);
      setMetrics(null);
    } finally {
      setIsGenerating(false);
    }
  };

  const onCollectionCreated = (newCollection: CardCollection) => {
    setCollections([...collections, newCollection]);
  };

  const onCollectionUpdated = (updatedCollection: CardCollection) => {
    setCollections(collections.map(col => col.id === updatedCollection.id ? updatedCollection : col));
    setCurrentCollection(null); // Clear current collection after update
  };

  const handleEditCollection = async (collection: CardCollection) => {
    try {
      // If collection doesn't have cards, fetch the complete collection
      if (!collection.cards) {
        const fullCollection = await ApiService.getCollectionById(collection.id);
        setCurrentCollection(fullCollection);
        setCards(fullCollection.cards || []);
      } else {
        setCurrentCollection(collection);
        setCards(collection.cards);
      }
    } catch (error) {
      console.error('Failed to load collection for editing:', error);
      alert('Failed to load collection for editing');
    }
  };

  const handleSaveCard = (updatedCard: CardData) => {
    // This logic seems incorrect, it should probably use a unique ID.
    // For now, leaving as is.
    setCards(cards.map((card) => (card.id === selectedCard?.id ? updatedCard : card)));
    setSelectedCard(null);
  };

  const handleGeneratePdf = async () => {
    if (cards.length === 0 || isGeneratingPdf) return;

    setIsGeneratingPdf(true);
    try {
      await generatePdfFromCards(cards, `cards-${Date.now()}.pdf`);
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Failed to generate PDF. Please try again.');
    } finally {
      setIsGeneratingPdf(false);
    }
  };

  const handleQuickSave = async () => {
    if (cards.length === 0 || isSavingQuick) return;

    const collectionName = prompt('Enter a name for this collection:');
    if (!collectionName || !collectionName.trim()) {
      return;
    }

    setIsSavingQuick(true);
    try {
      const savedCollection = await ApiService.createCollection({
        name: collectionName.trim(),
        cards: cards,
        isPublic: false
      });
      setCollections([...collections, savedCollection]);
      alert('Collection saved successfully!');
    } catch (error) {
      console.error('Error saving collection:', error);
      alert('Failed to save collection. Please try again.');
    } finally {
      setIsSavingQuick(false);
    }
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h1>Card Generator</h1>
        <Link 
          to="/collections" 
          style={{
            padding: '10px 20px',
            backgroundColor: '#6c757d',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '5px',
            fontSize: '16px'
          }}
        >
          📚 View Collections Library
        </Link>
      </div>
      <InputForm onGenerate={handleGenerate} isGenerating={isGenerating} />
      <hr />
      {selectedCard ? (
        <CardEditor card={selectedCard} onSave={handleSaveCard} />
      ) : (
        <>
          <CardGrid cards={cards} />
          {metrics && (
            <div style={{ marginTop: '12px', textAlign: 'center' }}>
              <p style={{ margin: '4px 0' }}>
                <strong>Total requests:</strong> {metrics.totalRequests} (text: {metrics.textRequests}, images: {metrics.imageRequests}, failed images: {metrics.imageFailures})
              </p>
              <p style={{ margin: '4px 0' }}>
                <strong>Payload size:</strong> {metrics.responseKilobytes} KB ({metrics.responseBytes} bytes)
              </p>
            </div>
          )}
          {cards.length > 0 && (
            <div style={{ textAlign: 'center', margin: '20px 0', display: 'flex', gap: '10px', justifyContent: 'center' }}>
              <button
                onClick={handleQuickSave}
                disabled={isSavingQuick}
                style={{
                  backgroundColor: isSavingQuick ? '#6c757d' : '#28a745',
                  color: 'white',
                  border: 'none',
                  padding: '10px 20px',
                  borderRadius: '5px',
                  cursor: isSavingQuick ? 'not-allowed' : 'pointer',
                  fontSize: '16px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                {isSavingQuick && (
                  <span style={{
                    width: '16px',
                    height: '16px',
                    border: '2px solid #ffffff',
                    borderTop: '2px solid transparent',
                    borderRadius: '50%',
                    animation: 'spin 1s linear infinite'
                  }}></span>
                )}
                {isSavingQuick ? 'Saving...' : '💾 Quick Save'}
              </button>

              <button
                onClick={handleGeneratePdf}
                disabled={isGeneratingPdf}
                style={{
                  backgroundColor: isGeneratingPdf ? '#6c757d' : '#007bff',
                  color: 'white',
                  border: 'none',
                  padding: '10px 20px',
                  borderRadius: '5px',
                  cursor: isGeneratingPdf ? 'not-allowed' : 'pointer',
                  fontSize: '16px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                {isGeneratingPdf && (
                  <span style={{
                    width: '16px',
                    height: '16px',
                    border: '2px solid #ffffff',
                    borderTop: '2px solid transparent',
                    borderRadius: '50%',
                    animation: 'spin 1s linear infinite'
                  }}></span>
                )}
                {isGeneratingPdf ? 'Generating PDF...' : '🖨️ Print to PDF'}
              </button>
            </div>
          )}
        </>
      )}
      <hr />
      <CollectionManager
        cards={cards}
        onCollectionCreated={onCollectionCreated}
        onCollectionUpdated={onCollectionUpdated}
        currentCollection={currentCollection}
      />
      <hr />
      <CollectionList
        collections={collections}
        onEditCollection={handleEditCollection}
      />
    </div>
  );
};

export default MainPage;
