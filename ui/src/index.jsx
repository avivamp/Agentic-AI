import React from 'react';
import ReactDOM from 'react-dom/client';
import { AIProvider } from './context/AIContext';
import InlineChat from './components/InlineChat';
import FloatingChat from './components/FloatingChat';
import { loadAgenticConfig } from './config';

export function init(userConfig = {}) {
  loadAgenticConfig(userConfig);

  const container = document.createElement('div');
  document.body.appendChild(container);

  ReactDOM.createRoot(container).render(
    <AIProvider>
      <InlineChat />
      <FloatingChat />
    </AIProvider>
  );
}

// global exposure
window.AgenticAI = { init };
