import React from 'react';

export default function AgenticChatCTA({ label, onClick }) {
  return (
    <button
      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg mt-2"
      onClick={onClick}
    >
      {label}
    </button>
  );
}
