import React, { useState, useRef, useEffect } from "react";
import { getAgenticConfig } from "../config";
import { useAI } from "../context/AIContext";
import { emit } from "../events/eventBus";
import ChatBubble from "./AgenticChatBubble";

/**
 * Enhanced Inline Chat
 * - Modern bubble layout
 * - Animated send icon
 * - Scroll-to-bottom on new message
 * - Connects to Agentic Search API
 */
export default function InlineChat() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const { state, dispatch } = useAI();
  const { apiBaseUrl, merchantId } = getAgenticConfig();
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [state.messages]);

  const handleSend = async () => {
    const text = query.trim();
    if (!text) return;

    dispatch({ type: "ADD_MESSAGE", payload: { type: "user", text } });
    emit("chatMessage", { text, sender: "user" });
    setQuery("");
    setLoading(true);

    try {
      const res = await fetch(`${apiBaseUrl}/agentic-search`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: text,
          merchant_id: merchantId,
          limit: 10,
          offset: 0,
        }),
      });
      const data = await res.json();

      emit("searchResults", { results: data.results || [], query: text });
      const summary = `Found ${data.results?.length || 0} products for “${text}”.`;
      dispatch({ type: "ADD_MESSAGE", payload: { type: "bot", text: summary } });
      emit("chatMessage", { text: summary, sender: "bot" });
    } catch (err) {
      const msg = "Sorry, I couldn’t fetch results right now.";
      dispatch({ type: "ADD_MESSAGE", payload: { type: "bot", text: msg } });
      emit("chatMessage", { text: msg, sender: "bot" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      id="agentic-inline-chat"
      className="agentic-inline-chat bg-white border rounded-2xl shadow-md p-4 max-w-2xl mx-auto my-4 flex flex-col space-y-3"
      data-agentic-inline="true"
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b pb-2">
        <h2 className="text-lg font-semibold text-gray-800">
          🛍️ Agentic Shopping Assistant
        </h2>
        <span className="text-xs text-gray-500">Powered by Aeroshop AI</span>
      </div>

      {/* Chat Area */}
      <div className="flex flex-col gap-2 overflow-y-auto max-h-60 pr-1 scroll-smooth">
        {state.messages.length === 0 && (
          <p className="text-gray-400 text-sm text-center mt-4">
            Ask anything — e.g. “show me baby perfumes under 100 AED”
          </p>
        )}

        {state.messages.map((m, i) => (
          <ChatBubble key={i} message={m.text} type={m.type} />
        ))}
        <div ref={chatEndRef}></div>
      </div>

      {/* Input Box */}
      <div className="flex items-center gap-2 border-t pt-3">
        <input
          className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--agentic-primary)]"
          placeholder="Type your question..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button
          onClick={handleSend}
          disabled={loading}
          className={`transition-transform active:scale-95 rounded-full p-2 ${
            loading
              ? "opacity-50 bg-gray-200"
              : "bg-[var(--agentic-primary)] text-white"
          }`}
          title="Send"
        >
          {loading ? (
            <svg
              className="animate-spin h-5 w-5 text-white"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8z"
              ></path>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 4l16 8-16 8V4z"
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}
