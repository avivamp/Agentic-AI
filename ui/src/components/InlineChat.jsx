import React, { useState } from "react";
import { getAgenticConfig } from "../config";
import { useAI } from "../context/AIContext";
import { emit } from "../events/eventBus";
import ChatBubble from "./ChatBubble";

export default function InlineChat() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const { state, dispatch } = useAI();
  const { apiBaseUrl, merchantId } = getAgenticConfig();

  const handleSend = async () => {
    if (!query.trim()) return;
    const text = query.trim();
    dispatch({ type: "ADD_MESSAGE", payload: { type: "user", text } });
    emit("chatMessage", { text, sender: "user" });
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

      const msg = `Found ${data.results?.length || 0} results for “${text}”.`;
      dispatch({ type: "ADD_MESSAGE", payload: { type: "bot", text: msg } });
      emit("chatMessage", { text: msg, sender: "bot" });
    } catch (e) {
      const msg = "Sorry, I couldn’t reach Agentic search right now.";
      dispatch({ type: "ADD_MESSAGE", payload: { type: "bot", text: msg } });
      emit("chatMessage", { text: msg, sender: "bot" });
    } finally {
      setLoading(false);
      setQuery("");
    }
  };

  return (
    <div
      id="agentic-inline-chat"
      className="agentic-chat-container w-full max-w-2xl mx-auto border rounded-2xl p-3 bg-white shadow-sm"
      data-agentic-inline="true"
    >
      <div className="flex gap-2 mb-2">
        <input
          className="flex-1 border rounded-xl px-3 py-2 outline-none focus:ring-2 ring-[var(--agentic-primary)]"
          placeholder="Ask for products (e.g. show me baby strollers)"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button
          className="bg-[var(--agentic-primary)] text-white px-4 rounded-xl"
          disabled={loading}
          onClick={handleSend}
        >
          {loading ? "..." : "Ask"}
        </button>
      </div>

      {/* last 4 messages for quick visual feedback */}
      <div className="space-y-1 max-h-40 overflow-y-auto pr-1">
        {state.messages.slice(-4).map((m, i) => (
          <ChatBubble key={i} message={m.text} type={m.type} />
        ))}
      </div>
    </div>
  );
}
