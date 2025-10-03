import React, { useState } from 'react';

interface InputFormProps {
  onGenerate: (theme: string, context: string) => void;
  isGenerating: boolean;
}

const InputForm: React.FC<InputFormProps> = ({ onGenerate, isGenerating }) => {
  const [theme, setTheme] = useState('');
  const [context, setContext] = useState('');

  const handleGenerate = () => {
    if (theme && context && !isGenerating) {
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
        disabled={isGenerating}
      />
      <textarea
        placeholder="Context"
        value={context}
        onChange={(e) => setContext(e.target.value)}
        disabled={isGenerating}
      />
      <button
        onClick={handleGenerate}
        disabled={isGenerating || !theme || !context}
        className="generate-button"
      >
        {isGenerating ? 'Generating...' : 'Generate'}
      </button>
      {isGenerating && (
        <div className="generate-spinner" role="status" aria-live="polite">
          <span className="visually-hidden">Generating cards...</span>
        </div>
      )}
    </div>
  );
};

export default InputForm;
