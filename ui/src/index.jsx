import React from "react";
import ReactDOM from "react-dom/client";
import { AIProvider } from "./context/AIContext";
import InlineChat from "./components/InlineChat";
import FloatingChat from "./components/FloatingChat";
import { loadAgenticConfig } from "./config";
import { on, emit } from "./events/eventBus";

const SDK_VERSION = "3.0.2";

function init(userConfig = {}) {
  console.log(`[AgenticAI SDK v${SDK_VERSION}] Initializing…`);
  loadAgenticConfig(userConfig);

  const id = "agentic-container";
  const existing = document.getElementById(id);
  if (existing) existing.remove();

  const container = document.createElement("div");
  container.id = id;
  document.body.appendChild(container);

  ReactDOM.createRoot(container).render(
    <AIProvider>
      <InlineChat />
      <FloatingChat />
    </AIProvider>
  );

  console.log("[AgenticAI SDK] Chat components mounted.");
}

// ✅ Safe global attach
const AgenticGlobal = typeof globalThis !== "undefined" ? globalThis : window;
if (!AgenticGlobal.AgenticAI) AgenticGlobal.AgenticAI = {};
Object.assign(AgenticGlobal.AgenticAI, { init, on, emit, version: SDK_VERSION });

export { init, on, emit };
