import React from "react";
import ReactDOM from "react-dom/client";
import { AIProvider } from "./context/AIContext";
import InlineChat from "./components/InlineChat";
import FloatingChat from "./components/FloatingChat";
import { loadAgenticConfig } from "./config";
import { on, emit } from "./events/eventBus";

const SDK_VERSION = "3.0.4";

/**
 * Initialize Agentic AI SDK
 * @param {Object} userConfig - Merchant configuration
 * @param {string} userConfig.apiBaseUrl - Backend API base URL
 * @param {string} userConfig.merchantId - Merchant ID
 * @param {string} [userConfig.uiMode="both"] - "inline" | "floating" | "both"
 * @param {string} [userConfig.targetSelector="#agentic-chat-container"] - DOM selector for where to mount
 * @param {string} [userConfig.customCssUrl] - Optional external CSS for theming
 */
function init(userConfig = {}) {
  console.group(`[AgenticAI SDK v${SDK_VERSION}] Initializing...`);

  const {
    uiMode = "both",
    targetSelector = "#agentic-chat-container",
  } = userConfig;

  loadAgenticConfig(userConfig);
  console.log("UI Mode:", uiMode);
  console.log("Target selector:", targetSelector);

  // Look for merchant-defined container
  let container = document.querySelector(targetSelector);

  // If not found, create automatically
  if (!container) {
    console.warn(
      `[AgenticAI SDK] No container found for selector ${targetSelector}, creating automatically.`
    );
    container = document.createElement("div");
    container.id = targetSelector.replace("#", "");
    document.body.appendChild(container);
  }

  // Remove any previous root to avoid duplicates
  if (container.__agenticRoot) {
    console.warn("[AgenticAI SDK] Existing root found. Reinitializing...");
    try {
      container.__agenticRoot.unmount();
    } catch (e) {
      console.error("Error unmounting previous root:", e);
    }
  }

  // Mount the React components
  const root = ReactDOM.createRoot(container);
  container.__agenticRoot = root;

  root.render(
    <AIProvider>
      {uiMode === "inline" && (
        <>
          {console.log("[AgenticAI SDK] Rendering InlineChat only")}
          <InlineChat />
        </>
      )}
      {uiMode === "floating" && (
        <>
          {console.log("[AgenticAI SDK] Rendering FloatingChat only")}
          <FloatingChat />
        </>
      )}
      {uiMode === "both" && (
        <>
          {console.log("[AgenticAI SDK] Rendering both InlineChat & FloatingChat")}
          <InlineChat />
          <FloatingChat />
        </>
      )}
    </AIProvider>
  );

  console.log(`[AgenticAI SDK] Mounted inside:`, container);
  console.groupEnd();
}

/** Attach global object for UMD / CDN usage */
const AgenticGlobal = typeof globalThis !== "undefined" ? globalThis : window;
if (!AgenticGlobal.AgenticAI) AgenticGlobal.AgenticAI = {};
Object.assign(AgenticGlobal.AgenticAI, {
  init,
  on,
  emit,
  version: SDK_VERSION,
});

console.log(`[AgenticAI SDK v${SDK_VERSION}] Global object attached: window.AgenticAI`);

export { init, on, emit };
