import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CardEditor from './CardEditor';
import { Card as CardData } from '../services/ApiService';

const mockCard: CardData = {
  id: '1',
  title: 'Test Title',
  description: 'Test Description',
  icon: '🧪',
  category: 'Test Category',
};

test('renders card editor and calls onSave', () => {
  const handleSave = jest.fn();
  render(<CardEditor card={mockCard} onSave={handleSave} />);

  const titleInput = screen.getByDisplayValue(/Test Title/i);
  const descriptionTextarea = screen.getByDisplayValue(/Test Description/i);
  const iconInput = screen.getByDisplayValue(/🧪/i);
  const saveButton = screen.getByText(/Save/i);

  expect(titleInput).toBeInTheDocument();
  expect(descriptionTextarea).toBeInTheDocument();
  expect(iconInput).toBeInTheDocument();
  expect(saveButton).toBeInTheDocument();

  fireEvent.change(titleInput, { target: { value: 'Updated Title' } });
  fireEvent.change(descriptionTextarea, { target: { value: 'Updated Description' } });
  fireEvent.change(iconInput, { target: { value: '✨' } });
  fireEvent.click(saveButton);

  expect(handleSave).toHaveBeenCalledWith({
    ...mockCard,
    title: 'Updated Title',
    description: 'Updated Description',
    icon: '✨',
  });
});
