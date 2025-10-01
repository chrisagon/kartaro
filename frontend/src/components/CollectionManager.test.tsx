import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import CollectionManager from './CollectionManager';
import * as ApiService from '../services/ApiService';
import { Card as CardData } from '../services/ApiService';

jest.mock('../services/ApiService');

const mockCards: CardData[] = [
  { id: '1', title: 'Card 1', description: 'Desc 1', icon: '1', category: 'Cat 1' },
];

// Create a mock function for the new prop
const mockOnCollectionCreated = jest.fn();

test('renders collection manager and calls createCollection', async () => {
  const createCollectionSpy = jest.spyOn(ApiService, 'createCollection').mockResolvedValueOnce({} as any);
  
  window.alert = jest.fn();

  render(<CollectionManager cards={mockCards} onCollectionCreated={mockOnCollectionCreated} />);

  const collectionNameInput = screen.getByPlaceholderText(/Collection Name/i);
  const createButton = screen.getByRole('button', { name: /Create Collection/i });

  expect(collectionNameInput).toBeInTheDocument();
  expect(createButton).toBeInTheDocument();

  fireEvent.change(collectionNameInput, { target: { value: 'Test Collection' } });
  fireEvent.click(createButton);

  await waitFor(() => {
    expect(createCollectionSpy).toHaveBeenCalledWith('Test Collection', mockCards);
    expect(window.alert).toHaveBeenCalledWith('Collection created successfully!');
    // Also test if our new function was called
    expect(mockOnCollectionCreated).toHaveBeenCalled();
  });
});

test('does not call createCollection if name is empty', () => {
    const createCollectionSpy = jest.spyOn(ApiService, 'createCollection');
  
    render(<CollectionManager cards={mockCards} onCollectionCreated={mockOnCollectionCreated} />);
  
    const createButton = screen.getByRole('button', { name: /Create Collection/i });
  
    fireEvent.click(createButton);
  
    expect(createCollectionSpy).not.toHaveBeenCalled();
});