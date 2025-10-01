import React, { useState } from 'react';

interface InputFormProps {
  onGenerate: (theme: string, context: string) => void;
}

const InputForm: React.FC<InputFormProps> = ({ onGenerate }) => {
  const [theme, setTheme] = useState('');
  const [context, setContext] = useState('');

  const handleGenerate = () => {
    if (theme && context) {
      onGenerate(theme, context);
    }
  };

  return (
    <div>
      <h3>Generate Cards</h3>
      <input
        type="text"
        placeholder="Theme"
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
      />
      <textarea
        placeholder="Context"
        value={context}
        onChange={(e) => setContext(e.target.value)}
      />
      <button onClick={handleGenerate}>Generate</button>
    </div>
  );
};

export default InputForm;
