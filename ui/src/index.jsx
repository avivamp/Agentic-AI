import { loadAgenticConfig } from './config';
import { AIProvider } from './context/AIContext';
import InlineChat from './components/InlineChat';
import FloatingChat from './components/FloatingChat';

export function initAgenticAI(userConfig = {}) {
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

// Expose globally
window.AgenticAI = { init: initAgenticAI };
