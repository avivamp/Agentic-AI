import React from "react";

export default function ChatBubble({ message, type }) {
  const isUser = type === "user";
  return (
    <div className={`flex gap-2 ${isUser ? 'justify-end' : 'justify-start'} w-full`}>
      <div className={`flex gap-2 max-w-[80%] ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>
        <div className="flex-shrink-0">
          {isUser ? (
            <svg className="h-6 w-6 text-blue-400 drop-shadow" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="10" strokeWidth="2" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" /></svg>
          ) : (
            <svg className="h-6 w-6 text-purple-400 drop-shadow" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="4" y="4" width="16" height="16" rx="8" strokeWidth="2" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h8M12 8v8" /></svg>
          )}
        </div>
        <div
          className={`px-4 py-2 rounded-2xl text-base shadow-lg border ${
            isUser
              ? 'bg-gradient-to-br from-blue-700 to-blue-500 text-white border-blue-400/60 agentic-message--user'
              : 'bg-gradient-to-br from-white/30 to-blue-100/30 text-blue-100 border-blue-400/20 agentic-message--bot backdrop-blur-md'
          }`}
          style={isUser ? { boxShadow: '0 2px 8px 0 #60a5fa' } : { boxShadow: '0 2px 8px 0 #a5b4fc' }}
        >
          {message}
        </div>
      </div>
    </div>
  );
}
