import React, { useState, useEffect } from 'react';
import { Card as CardData, CardCollection, generateCards, getCollections } from '../services/ApiService';
import InputForm from '../components/InputForm';
import CardGrid from '../components/CardGrid';
import CardEditor from '../components/CardEditor';
import CollectionManager from '../components/CollectionManager';
import CollectionList from '../components/CollectionList';

const MainPage: React.FC = () => {
  const [cards, setCards] = useState<CardData[]>([]);
  const [selectedCard, setSelectedCard] = useState<CardData | null>(null);
  const [collections, setCollections] = useState<CardCollection[]>([]);

  // Fetch collections on component mount
  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const fetchedCollections = await getCollections();
        setCollections(fetchedCollections);
      } catch (error) {
        console.error('Failed to fetch collections');
        alert('Failed to load existing collections.');
      }
    };

    fetchCollections();
  }, []);

  const handleGenerate = async (theme: string, context: string) => {
    try {
      const generatedCards = await generateCards(theme, context);
      if (Array.isArray(generatedCards)) {
        setCards(generatedCards);
      } else {
        alert('Received an invalid response from the server.');
        setCards([]);
      }
    } catch (error) {
      alert('Failed to generate cards');
      setCards([]);
    }
  };

  const onCollectionCreated = (newCollection: CardCollection) => {
    setCollections([...collections, newCollection]);
  };

  const handleSaveCard = (updatedCard: CardData) => {
    // This logic seems incorrect, it should probably use a unique ID.
    // For now, leaving as is.
    setCards(cards.map((card) => (card.id === selectedCard?.id ? updatedCard : card)));
    setSelectedCard(null);
  };

  return (
    <div>
      <h1>Card Generator</h1>
      <InputForm onGenerate={handleGenerate} />
      <hr />
      {selectedCard ? (
        <CardEditor card={selectedCard} onSave={handleSaveCard} />
      ) : (
        <CardGrid cards={cards} />
      )}
      <hr />
      <CollectionManager cards={cards} onCollectionCreated={onCollectionCreated} />
      <hr />
      <CollectionList collections={collections} />
    </div>
  );
};

export default MainPage;