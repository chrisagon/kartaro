import React from 'react';
import { CardCollection } from '../services/ApiService';

interface CollectionListProps {
  collections: CardCollection[];
}

const CollectionList: React.FC<CollectionListProps> = ({ collections }) => {
  return (
    <div>
      <h3>Saved Collections</h3>
      {collections.length === 0 ? (
        <p>No collections saved yet.</p>
      ) : (
        <ul>
          {collections.map((collection) => (
            <li key={collection.id}>{collection.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CollectionList;
