import React from 'react';
import { CardCollection } from '../types/app';

interface CollectionListProps {
  collections: CardCollection[];
  onEditCollection?: (collection: CardCollection) => void;
}

const CollectionList: React.FC<CollectionListProps> = ({ collections, onEditCollection }) => {
  return (
    <div>
      <h3>Saved Collections</h3>
      {collections.length === 0 ? (
        <p>No collections saved yet.</p>
      ) : (
        <ul>
          {collections.map((collection) => (
            <li key={collection.id}>
              <span>{collection.name}</span>
              {onEditCollection && (
                <button
                  onClick={() => onEditCollection(collection)}
                  style={{ marginLeft: '10px' }}
                >
                  Edit
                </button>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CollectionList;
