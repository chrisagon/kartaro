import React, { useState } from 'react';
import { Card, CardCollection, createCollection, updateCollection } from '../services/ApiService';

interface CollectionManagerProps {
  cards: Card[];
  onCollectionCreated: (newCollection: CardCollection) => void;
  onCollectionUpdated?: (updatedCollection: CardCollection) => void;
  currentCollection?: CardCollection | null; // Collection currently being edited
}

const CollectionManager: React.FC<CollectionManagerProps> = ({
  cards,
  onCollectionCreated,
  onCollectionUpdated,
  currentCollection
}) => {
  const [collectionName, setCollectionName] = useState(currentCollection?.name || '');
  const [isSaving, setIsSaving] = useState(false);

  // Update the collection name when currentCollection changes
  React.useEffect(() => {
    if (currentCollection) {
      setCollectionName(currentCollection.name);
    }
  }, [currentCollection]);

  const handleSaveCollection = async () => {
    if (!collectionName.trim() || cards.length === 0) {
      alert('Collection name and cards are required');
      return;
    }

    setIsSaving(true);
    try {
      let savedCollection: CardCollection;

      if (currentCollection) {
        // Update existing collection
        savedCollection = await updateCollection(currentCollection.id, collectionName.trim(), cards);
        if (onCollectionUpdated) {
          onCollectionUpdated(savedCollection);
        }
        alert('Collection updated successfully!');
      } else {
        // Create new collection
        savedCollection = await createCollection(collectionName.trim(), cards);
        onCollectionCreated(savedCollection);
        alert('Collection created successfully!');
        setCollectionName(''); // Clear input after creation
      }
    } catch (error) {
      console.error('Error saving collection:', error);
      alert(`Failed to ${currentCollection ? 'update' : 'create'} collection`);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div>
      <h3>{currentCollection ? 'Update Collection' : 'Create Collection'}</h3>
      <input
        type="text"
        placeholder="Collection Name"
        value={collectionName}
        onChange={(e) => setCollectionName(e.target.value)}
        disabled={isSaving}
      />
      <button
        onClick={handleSaveCollection}
        disabled={!collectionName.trim() || cards.length === 0 || isSaving}
      >
        {isSaving ? 'Saving...' : (currentCollection ? 'Update Collection' : 'Create Collection')}
      </button>
    </div>
  );
};

export default CollectionManager;