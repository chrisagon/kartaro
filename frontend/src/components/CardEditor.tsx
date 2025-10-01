import React, { useState } from 'react';
import { Card as CardData } from '../services/ApiService';

interface CardEditorProps {
  card: CardData;
  onSave: (updatedCard: CardData) => void;
}

const CardEditor: React.FC<CardEditorProps> = ({ card, onSave }) => {
  const [title, setTitle] = useState(card.title);
  const [description, setDescription] = useState(card.description);
  const [icon, setIcon] = useState(card.icon);

  const handleSave = () => {
    onSave({ ...card, title, description, icon });
  };

  return (
    <div>
      <h3>Edit Card</h3>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        value={icon}
        onChange={(e) => setIcon(e.target.value)}
      />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default CardEditor;
