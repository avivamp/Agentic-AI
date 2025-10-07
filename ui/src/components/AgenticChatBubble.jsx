import React from 'react';

export default function AgenticChatBubble({ message, type }) {
  const isUser = type === "user";
  return (
    <div
      className={`text-sm px-3 py-2 rounded-2xl max-w-[85%] ${
        isUser
          ? "bg-[var(--agentic-primary)] text-white self-end ml-auto"
          : "bg-gray-100 text-gray-800 self-start"
      }`}
    >
      {message}
    </div>
  );
}
