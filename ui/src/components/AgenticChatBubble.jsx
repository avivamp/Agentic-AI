import React from "react";

export default function ChatBubble({ message, type }) {
  const isUser = type === "user";
  return (
    <div
      className={`flex ${
        isUser ? "justify-end" : "justify-start"
      } transition-all`}
    >
      <div
        className={`px-3 py-2 rounded-xl max-w-[80%] text-sm ${
          isUser
            ? "bg-blue-600 text-white self-end"
            : "bg-gray-800 text-gray-100 border border-gray-700"
        }`}
      >
        {message}
      </div>
    </div>
  );
}
