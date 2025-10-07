import React from "react";
import ReactDOM from "react-dom/client";
import { AIProvider } from "./context/AIContext";
import InlineChat from "./components/InlineChat";
import FloatingChat from "./components/FloatingChat";
import { loadAgenticConfig } from "./config";
import { on, emit } from "./events/eventBus";

const SDK_VERSION = "3.0.3";

/**
 * Initialize Agentic AI SDK
 * @param {Object} userConfig - Merchant configuration
 * @param {string} userConfig.apiBaseUrl - Backend API base URL
 * @param {string} userConfig.merchantId - Merchant ID
 * @param {string} [userConfig.uiMode="both"] - "inline" | "floating" | "both"
 * @param {string} [userConfig.customCssUrl] - Optional external CSS for theming
 */
function init(userConfig = {}) {
  console.group(`[AgenticAI SDK v${SDK_VERSION}]`);
  console.log("Initializing AgenticAI SDK...");
  const { uiMode = "both" } = userConfig;
  console.log(`UI mode selected: ${uiMode}`);
  loadAgenticConfig(userConfig);

  // Remove any existing chat container to avoid duplicates
  const existing = document.getElementById("agentic-container");
  if (existing) {
    console.warn("[AgenticAI SDK] Existing instance found. Reinitializing...");
    existing.remove();
  }

  // Create root container for chat components
  const container = document.createElement("div");
  container.id = "agentic-container";
  document.body.appendChild(container);

  // Render chat UI based on mode
  const root = ReactDOM.createRoot(container);

  root.render(
    <AIProvider>
      {uiMode === "inline" && (
        <>
          <InlineChat />
          {console.log("[AgenticAI SDK] Rendering InlineChat only")}
        </>
      )}
      {uiMode === "floating" && (
        <>
          <FloatingChat />
          {console.log("[AgenticAI SDK] Rendering FloatingChat only")}
        </>
      )}
      {uiMode === "both" && (
        <>
          <InlineChat />
          <FloatingChat />
          {console.log("[AgenticAI SDK] Rendering both InlineChat & FloatingChat")}
        </>
      )}
    </AIProvider>
  );

  console.log("[AgenticAI SDK] Chat components mounted successfully.");
  console.groupEnd();
}

/** Safe global export for CDN & ES environments */
const AgenticGlobal = typeof globalThis !== "undefined" ? globalThis : window;
if (!AgenticGlobal.AgenticAI) AgenticGlobal.AgenticAI = {};
Object.assign(AgenticGlobal.AgenticAI, { init, on, emit, version: SDK_VERSION });

console.log(`[AgenticAI SDK v${SDK_VERSION}] Global attached:`, AgenticGlobal.AgenticAI);
export { init, on, emit };
