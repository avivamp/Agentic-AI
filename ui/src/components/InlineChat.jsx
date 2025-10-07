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
      className="agentic-inline-chat w-full max-w-2xl mx-auto space-y-4 bg-white/10 backdrop-blur-md border border-blue-400/30 shadow-2xl rounded-3xl p-6"
      data-agentic-inline="true"
      style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)' }}
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-blue-400/20 pb-2">
        <h2 className="text-lg font-bold text-white flex items-center gap-2 tracking-wide drop-shadow">
          <span className="inline-block bg-gradient-to-br from-blue-500 to-purple-500 text-white rounded-full px-2 py-1 text-xs font-semibold mr-2 shadow">AI</span>
          Agentic Shopping Assistant
        </h2>
        <span className="text-xs text-blue-200">Powered by Aeroshop AI ✈️</span>
      </div>

      {/* Chat Area */}
  <div className="p-4 max-h-60 overflow-y-auto space-y-3 bg-white/20 rounded-2xl shadow-inner border border-blue-400/10">
        {state.messages.length === 0 && (
          <p className="text-blue-200 text-sm text-center mt-4 italic">
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
          className="agentic-input flex-1 rounded-full px-4 py-2 text-base text-white bg-white/10 border-2 border-blue-400/40 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-blue-200 shadow-inner backdrop-blur-md"
          placeholder="Type your question..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          disabled={loading}
          style={{ boxShadow: '0 2px 8px 0 rgba(0, 119, 255, 0.10)' }}
        />
        <button
          onClick={handleSend}
          disabled={loading || !query.trim()}
          className={`transition-transform active:scale-95 rounded-full p-3 shadow-lg border-2 border-blue-400/60 ${
            loading
              ? "opacity-50 bg-blue-400/30"
              : "bg-gradient-to-br from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
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
