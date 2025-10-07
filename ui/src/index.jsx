import React from 'react';
import ReactDOM from 'react-dom/client';
import { AIProvider } from './context/AIContext';
import InlineChat from './components/InlineChat';
import FloatingChat from './components/FloatingChat';
import './styles.css';

function AgenticDualChat() {
  return (
    <AIProvider>
      <InlineChat />
      <FloatingChat />
    </AIProvider>
  );
}

const container = document.createElement('div');
document.body.appendChild(container);
ReactDOM.createRoot(container).render(<AgenticDualChat />);
