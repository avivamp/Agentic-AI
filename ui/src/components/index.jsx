import React from 'react';
import ReactDOM from 'react-dom/client';
import AgenticChatCompanion from './components/AgenticChatCompanion';
import './styles.css';

export function init() {
  const container = document.createElement('div');
  document.body.appendChild(container);
  ReactDOM.createRoot(container).render(<AgenticChatCompanion />);
}
