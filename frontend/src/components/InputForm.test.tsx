import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import InputForm from './InputForm';

test('renders input form and calls onGenerate', () => {
  const handleGenerate = jest.fn();
  render(<InputForm onGenerate={handleGenerate} isGenerating={false} />);

  const themeInput = screen.getByPlaceholderText(/Theme/i);
  const contextTextarea = screen.getByPlaceholderText(/Context/i);
  const generateButton = screen.getByRole('button', { name: /Generate/i });

  expect(themeInput).toBeInTheDocument();
  expect(contextTextarea).toBeInTheDocument();
  expect(generateButton).toBeDisabled();

  fireEvent.change(themeInput, { target: { value: 'Test Theme' } });
  fireEvent.change(contextTextarea, { target: { value: 'Test Context' } });

  expect(generateButton).toBeEnabled();

  fireEvent.click(generateButton);

  expect(handleGenerate).toHaveBeenCalledWith('Test Theme', 'Test Context');
});

test('does not call onGenerate if inputs are empty', () => {
  const handleGenerate = jest.fn();
  render(<InputForm onGenerate={handleGenerate} isGenerating={false} />);

  const generateButton = screen.getByRole('button', { name: /Generate/i });

  fireEvent.click(generateButton);

  expect(handleGenerate).not.toHaveBeenCalled();
});

test('disables form and shows spinner while generating', () => {
  const handleGenerate = jest.fn();
  render(<InputForm onGenerate={handleGenerate} isGenerating />);

  const generateButton = screen.getByRole('button', { name: /Generating.../i });
  expect(generateButton).toBeDisabled();
  expect(screen.getByRole('status')).toBeInTheDocument();
});
