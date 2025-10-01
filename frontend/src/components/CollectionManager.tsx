import React, { useState } from 'react';
import { Card, CardCollection, createCollection } from '../services/ApiService';

interface CollectionManagerProps {
  cards: Card[];
  onCollectionCreated: (newCollection: CardCollection) => void;
}

const CollectionManager: React.FC<CollectionManagerProps> = ({ cards, onCollectionCreated }) => {
  const [collectionName, setCollectionName] = useState('');

  const handleCreateCollection = async () => {
    if (collectionName && cards.length > 0) {
      try {
        const newCollection = await createCollection(collectionName, cards);
        alert('Collection created successfully!');
        setCollectionName(''); // Clear input after creation
        onCollectionCreated(newCollection); // Notify parent component
      } catch (error) {
        alert('Failed to create collection');
      }
    }
  };

  return (
    <div>
      <h3>Create Collection</h3>
      <input
        type="text"
        placeholder="Collection Name"
        value={collectionName}
        onChange={(e) => setCollectionName(e.target.value)}
      />
      <button onClick={handleCreateCollection}>Create Collection</button>
    </div>
  );
};

export default CollectionManager;