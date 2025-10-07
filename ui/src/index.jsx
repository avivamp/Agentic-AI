import React from "react";
import ReactDOM from "react-dom/client";
import { AIProvider } from "./context/AIContext";
import InlineChat from "./components/InlineChat";
import FloatingChat from "./components/FloatingChat";
import { loadAgenticConfig } from "./config";
import { on, emit } from "./events/eventBus";

const SDK_VERSION = "3.0.5";

function init(userConfig = {}) {
  console.group(`[AgenticAI SDK v${SDK_VERSION}] Initializing...`);

  const {
    uiMode = "both",
    targetSelector = "#agentic-chat-container", // 👈 default merchant container
  } = userConfig;

  loadAgenticConfig(userConfig);
  console.log("UI Mode:", uiMode);
  console.log("Target selector:", targetSelector);

  // ✅ Look for merchant container first
  let container = document.querySelector(targetSelector);

  // ✅ If not found, create automatically at end of <body>
  if (!container) {
    console.warn(
      `[AgenticAI SDK] No container found for ${targetSelector}, creating automatically.`
    );
    container = document.createElement("div");
    container.id = targetSelector.replace("#", "");
    document.body.appendChild(container);
  }

  // 🧹 Clean up any previous root
  if (container.__agenticRoot) {
    try {
      container.__agenticRoot.unmount();
    } catch (e) {
      console.warn("[AgenticAI SDK] Error unmounting previous root", e);
    }
  }

  // ✅ Mount React into the *merchant’s container*
  const root = ReactDOM.createRoot(container);
  container.__agenticRoot = root;

  root.render(
    <AIProvider>
      {uiMode === "inline" && <InlineChat />}
      {uiMode === "floating" && <FloatingChat />}
      {uiMode === "both" && (
        <>
          <InlineChat />
          <FloatingChat />
        </>
      )}
    </AIProvider>
  );

  console.log(`[AgenticAI SDK] Mounted successfully in container:`, container);
  console.groupEnd();
}

// Expose global
const AgenticGlobal = typeof globalThis !== "undefined" ? globalThis : window;
if (!AgenticGlobal.AgenticAI) AgenticGlobal.AgenticAI = {};
Object.assign(AgenticGlobal.AgenticAI, { init, on, emit, version: SDK_VERSION });

console.log(`[AgenticAI SDK v${SDK_VERSION}] Global attached as window.AgenticAI`);

export { init, on, emit };
