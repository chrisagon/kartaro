import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CardCollection } from '../types/app';
import * as ApiService from '../services/ApiService';
import CardGrid from '../components/CardGrid';
import './CollectionDetailPage.css';

const CollectionDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [collection, setCollection] = useState<CardCollection | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchCollection = async () => {
      try {
        const fetchedCollection = await ApiService.getCollectionById(id);
        setCollection(fetchedCollection);
      } catch (err) {
        setError('Failed to fetch collection details.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCollection();
  }, [id]);

  if (loading) {
    return <div>Loading collection...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!collection) {
    return <div>Collection not found.</div>;
  }


  return (
    <div className="collection-detail-page">
      <div className="detail-header">
        <div>
          <h1>{collection.name}</h1>
          {collection.description && (
            <p className="collection-description">{collection.description}</p>
          )}
          <p className="collection-meta">
            {collection.cards?.length || 0} cards • Created: {new Date(collection.createdAt).toLocaleDateString()}
          </p>
        </div>
        <div className="header-actions">
          <Link to="/collections" className="btn btn-back">← Back to Library</Link>
        </div>
      </div>
      <CardGrid cards={collection.cards || []} />
    </div>
  );
};

export default CollectionDetailPage;
