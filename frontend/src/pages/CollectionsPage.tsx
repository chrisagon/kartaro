import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CardCollection, getCollections } from '../services/ApiService';

const CollectionsPage: React.FC = () => {
  const [collections, setCollections] = useState<CardCollection[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const fetchedCollections = await getCollections();
        setCollections(fetchedCollections);
      } catch (err) {
        setError('Failed to fetch collections.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCollections();
  }, []);

  if (loading) {
    return <div>Loading collections...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>My Collections</h1>
      {collections.length > 0 ? (
        <ul>
          {collections.map((collection) => (
            <li key={collection.id}>
              <Link to={`/collections/${collection.id}`}>{collection.name}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No collections found.</p>
      )}
    </div>
  );
};

export default CollectionsPage;
