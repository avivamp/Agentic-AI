import React, { useState } from 'react';
import { useAI } from '../context/AIContext';
import { sendMessage } from '../services/agenticAPI';

export default function InlineChat() {
  const { state, dispatch } = useAI();
  const [query, setQuery] = useState('');

  const handleSend = async () => {
    if (!query.trim()) return;
    dispatch({ type: 'ADD_MESSAGE', payload: { type: 'user', text: query } });
    setQuery('');

    const response = await sendMessage(query, state.context);
    dispatch({ type: 'ADD_MESSAGE', payload: { type: 'bot', text: response.reply } });
  };

  return (
    <div className="inline-chat bg-white shadow-sm border rounded-lg p-3 mb-4">
      <div className="flex gap-2">
        <input
          className="flex-1 border p-2 rounded-lg"
          placeholder="Ask for perfumes that help with sleep..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        />
        <button onClick={handleSend} className="bg-blue-600 text-white px-4 rounded-lg">Ask</button>
      </div>
    </div>
  );
}
