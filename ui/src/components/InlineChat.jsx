import React, { useState } from "react";
import { getAgenticConfig } from "../config";
import { useAI } from "../context/AIContext";
import { emit } from "../events/eventBus";

/**
 * InlineChat.jsx
 * Appears above the merchant product grid / search box.
 * Handles natural-language queries and calls the Agentic Search API.
 */
export default function InlineChat() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const { state, dispatch } = useAI();
  const { apiBaseUrl, merchantId } = getAgenticConfig();

  const handleSend = async () => {
    if (!query.trim()) return;
    dispatch({ type: "ADD_MESSAGE", payload: { type: "user", text: query } });
    emit("chatMessage", { text: query, sender: "user" });
    setLoading(true);

    try {
      const res = await fetch(`${apiBaseUrl}/agentic-search`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query,
          merchant_id: merchantId,
          limit: 10,
          offset: 0,
        }),
      });

      const data = await res.json();
      setLoading(false);

      // 1️⃣ Emit structured search results
      emit("searchResults", { results: data?.results || [], query });

      // 2️⃣ Emit chat response message
      const summary = `Found ${data?.results?.length || 0} matching products for “${query}”.`;
      dispatch({ type: "ADD_MESSAGE", payload: { type: "bot", text: summary } });
      emit("chatMessage", { text: summary, sender: "bot" });
    } catch (err) {
      console.error("[AgenticAI] Search failed:", err);
      setLoading(false);
      const errorMsg = "Sorry, I couldn’t find products right now.";
      dispatch({ type: "ADD_MESSAGE", payload: { type: "bot", text: errorMsg } });
      emit("chatMessage", { text: errorMsg, sender: "bot" });
    }

    setQuery("");
  };

  return (
    <div className="agentic-inline-chat">
      <div className="flex gap-2">
        <input
          className="agentic-input"
          placeholder="Ask for products (e.g. baby strollers)..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button
          onClick={handleSend}
          className="bg-[var(--agentic-primary)] text-white px-4 rounded-lg"
          disabled={loading}
        >
          {loading ? "Searching..." : "Ask"}
        </button>
      </div>
    </div>
  );
}
