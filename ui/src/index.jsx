import React from 'react';
import ReactDOM from 'react-dom/client';
import { AIProvider } from './context/AIContext';
import InlineChat from './components/InlineChat';
import FloatingChat from './components/FloatingChat';
import { loadAgenticConfig } from './config';
import { on, emit } from './events/eventBus';

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

window.AgenticAI = { init, on, emit };
