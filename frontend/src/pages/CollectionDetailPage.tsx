import React, { useState, useEffect, useMemo, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CardCollection } from '../types/app';
import * as ApiService from '../services/ApiService';
import CardGrid from '../components/CardGrid';
import { generatePdfFromCollection } from '../services/PdfService';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import { renderElementAsDataUrl } from '../utils/exportToPng';
import JSZip from 'jszip';
import './CollectionDetailPage.css';

const CollectionDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [collection, setCollection] = useState<CardCollection | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isPrinting, setIsPrinting] = useState<boolean>(false);
  const [isExportingZip, setIsExportingZip] = useState<boolean>(false);
  const cardRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

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

  const handleExportZip = async () => {
    if (!collection || !collection.cards || collection.cards.length === 0) {
      alert('Cette collection ne contient aucune carte à exporter.');
      return;
    }

    setIsExportingZip(true);
    const zip = new JSZip();
    try {
      // Attendre un peu que les cartes soient rendues
      await new Promise(resolve => setTimeout(resolve, 500));
      
      for (let i = 0; i < collection.cards.length; i++) {
        const card = collection.cards[i];
        const ref = cardRefs.current[card.id];
        if (ref) {
          const dataUrl = await renderElementAsDataUrl(ref, 2);
          const base64 = dataUrl.split(',')[1];
          zip.file(`${card.title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}_${card.id}.png`, base64, { base64: true });
        }
      }
      
      const content = await zip.generateAsync({ type: 'blob' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(content);
      link.download = `${collection.name.replace(/[^a-z0-9]/gi, '_').toLowerCase()}_${new Date().toISOString().slice(0, 10)}.zip`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(link.href);
    } catch (err) {
      console.error('Erreur export ZIP:', err);
      alert('Échec de l\'export ZIP.');
    } finally {
      setIsExportingZip(false);
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
          <button
            className="btn btn-zip"
            onClick={handleExportZip}
            disabled={isExportingZip}
            title="Télécharger toutes les cartes au format PNG dans un fichier ZIP"
          >
            {isExportingZip ? '⏳ Export...' : '📦 Export ZIP'}
          </button>
        </div>
      </div>
      <CardGrid
        cards={collection.cards || []}
        theme={collection.theme}
        publicTarget={collection.publicTarget}
        context={collection.context}
        description={collection.description}
        cardRefs={cardRefs}
      />
    </div>
  );
};

export default CollectionDetailPage;
