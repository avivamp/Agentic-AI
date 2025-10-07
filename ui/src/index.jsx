import React from "react";
import ReactDOM from "react-dom/client";
import { AIProvider } from "./context/AIContext";
import InlineChat from "./components/InlineChat";
import FloatingChat from "./components/FloatingChat";
import { loadAgenticConfig } from "./config";
import { on, emit } from "./events/eventBus";

/**
 * Initialize Agentic AI SDK
 * Called by merchants via AgenticAI.init({ ...config })
 */
function init(userConfig = {}) {
  console.log("[AgenticAI SDK] Initializing with config:", userConfig);
  loadAgenticConfig(userConfig);

  const existing = document.getElementById("agentic-container");
  if (existing) existing.remove();

  const container = document.createElement("div");
  container.id = "agentic-container";
  document.body.appendChild(container);

  ReactDOM.createRoot(container).render(
    <AIProvider>
      <InlineChat />
      <FloatingChat />
    </AIProvider>
  );

  console.log("[AgenticAI SDK] Chat components mounted successfully.");
}

/**
 * Global Exposure
 * This ensures window.AgenticAI is always available after SDK load.
 */
window.AgenticAI = {
  init,
  on,
  emit,
};

// For module imports (ESM / CommonJS)
export { init, on, emit };

console.log("[AgenticAI SDK] Global object attached:", window.AgenticAI);
