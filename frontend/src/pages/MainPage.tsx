import React, { useState, useEffect } from 'react';
import { Card as CardData, CardCollection, generateCards, getCollections, getCollectionById } from '../services/ApiService';
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
    setIsGenerating(true);
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
        const fullCollection = await getCollectionById(collection.id);
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

  const handleNewCollection = () => {
    setCurrentCollection(null);
    setCards([]);
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
      <InputForm onGenerate={handleGenerate} isGenerating={isGenerating} />
      <hr />
      {selectedCard ? (
        <CardEditor card={selectedCard} onSave={handleSaveCard} />
      ) : (
        <CardGrid cards={cards} />
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
