import React from "react";
import { useAI } from "../context/AIContext";
import ChatBubble from "./AgenticChatBubble";
import { useInlineChat } from '../hooks/useInlineChat';

export default function InlineChat() {
  const { state, dispatch } = useAI();
  const { query, setQuery, loading, chatEndRef, handleSend } = useInlineChat(state, dispatch);

  return (
    <div
      id="agentic-inline-chat"
      className="agentic-inline-chat w-full max-w-2xl mx-auto space-y-4"
      data-agentic-inline="true"
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-200 pb-2">
        <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2 tracking-wide">
          <span className="inline-block bg-gradient-to-br from-blue-500 to-purple-500 text-white rounded-full px-2 py-1 text-xs font-semibold mr-2">AI</span>
          Agentic Shopping Assistant
        </h2>
        <span className="text-xs text-gray-500">Powered by Aeroshop AI ✈️</span>
      </div>

      {/* Chat Area */}
      <div className="p-4 max-h-60 overflow-y-auto space-y-3 bg-white/80 rounded-xl shadow border border-gray-100">
        {state.messages.length === 0 && (
          <p className="text-gray-400 text-sm text-center mt-4 italic">
            Ask me anything — e.g. “show me baby perfumes under 100 AED”
          </p>
        )}

        {state.messages.map((m, i) => (
          <ChatBubble key={i} message={m.text} type={m.type} />
        ))}

        {loading && (
          <div className="flex justify-start text-gray-400 text-sm">
            <div className="flex items-center gap-1">
              <span className="animate-bounce">●</span>
              <span className="animate-bounce delay-100">●</span>
              <span className="animate-bounce delay-200">●</span>
            </div>
          </div>
        )}
        <div ref={chatEndRef}></div>
      </div>

      {/* Input Box */}
      <div className="flex gap-2 pt-3">
        <input
          className="agentic-input flex-1 rounded-full px-4 py-2 text-base text-gray-900 bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
          placeholder="Ask me anything about products..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          disabled={loading}
        />
        <button
          onClick={handleSend}
          disabled={loading || !query.trim()}
          className={`transition-transform active:scale-95 rounded-full p-3 ${
            loading
              ? "opacity-50 bg-gray-300"
              : "bg-blue-600 hover:bg-blue-700 text-white"
          }`}
          title="Send"
        >
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
        </button>
      </div>
    </div>
  );
}
