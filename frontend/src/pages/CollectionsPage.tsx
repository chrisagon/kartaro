import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CardCollection } from '../types/app';
import * as ApiService from '../services/ApiService';
import { generatePdfFromCollection } from '../services/PdfService';
import './CollectionsPage.css';

const CollectionsPage: React.FC = () => {
  const [collections, setCollections] = useState<CardCollection[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [printingId, setPrintingId] = useState<string | null>(null);

  useEffect(() => {
    fetchCollections();
  }, []);

  const fetchCollections = async () => {
    try {
      setLoading(true);
      const fetchedCollections = await ApiService.getCollections();
      setCollections(Array.isArray(fetchedCollections) ? fetchedCollections : []);
      setError(null);
    } catch (err) {
      setError('Failed to fetch collections.');
      console.error(err);
      setCollections([]);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string, name: string) => {
    if (!window.confirm(`Are you sure you want to delete the collection "${name}"?`)) {
      return;
    }

    setDeletingId(id);
    try {
      await ApiService.deleteCollection(id);
      setCollections((prevCollections) => (prevCollections || []).filter(col => col.id !== id));
    } catch (err) {
      console.error('Failed to delete collection:', err);
      alert('Failed to delete collection. Please try again.');
    } finally {
      setDeletingId(null);
    }
  };

  const handlePrint = async (collection: CardCollection) => {
    setPrintingId(collection.id);
    try {
      // Fetch full collection with cards if not already loaded
      let fullCollection = collection;
      if (!collection.cards || collection.cards.length === 0) {
        fullCollection = await ApiService.getCollectionById(collection.id);
      }

      await generatePdfFromCollection(fullCollection);
    } catch (err) {
      console.error('Failed to generate PDF:', err);
      alert('Failed to generate PDF. Please try again.');
    } finally {
      setPrintingId(null);
    }
  };


  if (loading) {
    return <div>Loading collections...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="collections-page">
      <div className="collections-header">
        <h1>My Collections Library</h1>
        <Link to="/" className="btn-back">← Back to Generator</Link>
      </div>

      {collections.length > 0 ? (
        <div className="collections-grid">
          {collections.map((collection) => (
            <div key={collection.id} className="collection-card">
              <div className="collection-info">
                <h3>{collection.name}</h3>
                <p className="collection-meta">
                  {collection.cards?.length || 0} cards
                </p>
                {collection.description && (
                  <p className="collection-description">{collection.description}</p>
                )}
                <p className="collection-date">
                  Created: {new Date(collection.createdAt).toLocaleDateString()}
                </p>
              </div>

              <div className="collection-actions">
                <Link 
                  to={`/collections/${collection.id}`} 
                  className="btn btn-view"
                >
                  👁️ View
                </Link>

                <button
                  onClick={() => handlePrint(collection)}
                  disabled={printingId === collection.id}
                  className="btn btn-print"
                >
                  {printingId === collection.id ? '⏳ Printing...' : '🖨️ Print to PDF'}
                </button>

                <button
                  onClick={() => handleDelete(collection.id, collection.name)}
                  disabled={deletingId === collection.id}
                  className="btn btn-delete"
                >
                  {deletingId === collection.id ? '⏳ Deleting...' : '🗑️ Delete'}
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <p>No collections found.</p>
          <Link to="/" className="btn btn-primary">Create your first collection</Link>
        </div>
      )}
    </div>
  );
};

export default CollectionsPage;
