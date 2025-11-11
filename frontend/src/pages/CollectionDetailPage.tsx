import React, { useState, useEffect, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CardCollection } from '../types/app';
import * as ApiService from '../services/ApiService';
import CardGrid from '../components/CardGrid';
import { generatePdfFromCollection } from '../services/PdfService';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import './CollectionDetailPage.css';

const CollectionDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [collection, setCollection] = useState<CardCollection | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isPrinting, setIsPrinting] = useState<boolean>(false);

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

  const purifier = useMemo(() => {
    if (typeof window === 'undefined') {
      return null;
    }
    return DOMPurify(window);
  }, []);

  const renderedContext = useMemo(() => {
    if (!collection?.context || !purifier) {
      return '';
    }

    const rawHtml = marked.parse(collection.context, { async: false }) as string;
    return purifier.sanitize(rawHtml);
  }, [collection?.context, purifier]);

  if (loading) {
    return <div>Loading collection...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!collection) {
    return <div>Collection not found.</div>;
  }

  const handlePrint = async () => {
    if (!collection) {
      return;
    }

    setIsPrinting(true);
    try {
      let collectionWithCards = collection;
      if (!collection.cards || collection.cards.length === 0) {
        collectionWithCards = await ApiService.getCollectionById(collection.id);
        setCollection(collectionWithCards);
      }

      if (!collectionWithCards.cards || collectionWithCards.cards.length === 0) {
        alert('Cette collection ne contient aucune carte à exporter.');
        return;
      }

      await generatePdfFromCollection(collectionWithCards);
    } catch (printError) {
      console.error('Failed to generate PDF:', printError);
      alert('Failed to generate PDF. Please try again.');
    } finally {
      setIsPrinting(false);
    }
  };

  return (
    <div className="collection-detail-page">
      <div className="detail-header">
        <div>
          <h1>{collection.name}</h1>
          {collection.description && (
            <p className="collection-description">{collection.description}</p>
          )}
          <div className="collection-meta">
            <p>
              {collection.cards?.length || 0} cards • Created: {new Date(collection.createdAt).toLocaleDateString()}
            </p>
            {(collection.theme || collection.publicTarget || collection.context) && (
              <div className="collection-meta-extra">
                {collection.theme && <p><strong>Titre :</strong> {collection.theme}</p>}
                {collection.publicTarget && <p><strong>Audience :</strong> {collection.publicTarget}</p>}
                {renderedContext && (
                  <div className="collection-context">
                    <strong>Contexte :</strong>
                    <div
                      className="collection-context-body"
                      dangerouslySetInnerHTML={{ __html: renderedContext }}
                    />
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="header-actions">
          <Link to="/collections" className="btn btn-back">← Back to Library</Link>
          <button
            className="btn btn-print"
            onClick={handlePrint}
            disabled={isPrinting}
          >
            {isPrinting ? '⏳ Printing...' : '🖨️ Imprimer PDF'}
          </button>
        </div>
      </div>
      <CardGrid
        cards={collection.cards || []}
        theme={collection.theme}
        publicTarget={collection.publicTarget}
        context={collection.context}
        description={collection.description}
      />
    </div>
  );
};

export default CollectionDetailPage;
