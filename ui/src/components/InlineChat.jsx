import React, { useState } from 'react';
import { useAI } from '../context/AIContext';
import { sendMessage } from '../services/agenticAPI';
import { getAgenticConfig } from '../config';

export default function InlineChat() {
  const { state, dispatch } = useAI();
  const [query, setQuery] = useState('');

  const handleSend = async () => {
    const { apiBaseUrl } = getAgenticConfig();
    const url = `${apiBaseUrl}/agentic-chat/respond`;
  
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query, context: state.context })
    });
    const data = await res.json();
    dispatch({ type: 'ADD_MESSAGE', payload: { type: 'bot', text: data.reply } });
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
