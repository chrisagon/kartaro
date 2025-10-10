import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CardCollection } from '../types/app';
import * as ApiService from '../services/ApiService';
import CardGrid from '../components/CardGrid';
import axios from 'axios';
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

    const handlePrint = async () => {
    if (!id) return;
    try {
      const response = await axios.get(`http://localhost:3001/api/collections/${id}/pdf`, {
        responseType: 'blob',
      });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `${collection?.name || 'collection'}.pdf`);
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (err) {
      setError('Failed to generate PDF.');
      console.error(err);
    }
  };

  return (
    <div>
      <h1>{collection.name}</h1>
      <button onClick={handlePrint} className="print-button">Print to PDF</button>
      <CardGrid cards={collection.cards || []} />
    </div>
  );
};

export default CollectionDetailPage;
