import React, { useState } from 'react';
import { useAI } from '../context/AIContext';
import { getAgenticConfig } from '../config';

export default function InlineChat() {
  const { state, dispatch } = useAI();
  const [query, setQuery] = useState('');
  const { apiBaseUrl } = getAgenticConfig();

  const handleSend = async () => {
    if (!query.trim()) return;
    dispatch({ type: 'ADD_MESSAGE', payload: { type: 'user', text: query } });
    setQuery('');

    const res = await fetch(`${apiBaseUrl}/agentic-chat/respond`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query, context: state.context })
    });
    const data = await res.json();
    dispatch({ type: 'ADD_MESSAGE', payload: { type: 'bot', text: data.reply } });
  };

  return (
    <div className="agentic-inline-chat">
      <div className="flex gap-2">
        <input
          className="agentic-input"
          placeholder="Ask something..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        />
        <button onClick={handleSend} className="bg-[var(--agentic-primary)] text-white px-4 rounded-lg">
          Ask
        </button>
      </div>
    </div>
  );
}
