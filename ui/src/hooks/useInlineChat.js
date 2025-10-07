import { useRef, useEffect, useState } from 'react';
import { emit } from '../events/eventBus';
import { getAgenticConfig } from '../config';

export function useInlineChat(state, dispatch) {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);
  const { apiBaseUrl, merchantId } = getAgenticConfig();

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [state.messages]);

  const handleSend = async () => {
    const text = query.trim();
    if (!text) return;
    dispatch({ type: 'ADD_MESSAGE', payload: { type: 'user', text } });
    emit('chatMessage', { text, sender: 'user' });
    setQuery('');
    setLoading(true);
    try {
      const res = await fetch(`${apiBaseUrl}/agentic-search`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: text, merchant_id: merchantId, limit: 10, offset: 0 }),
      });
      const data = await res.json();
      emit('searchResults', { results: data.results || [], query: text });
      const summary = `Found ${data.results?.length || 0} products for “${text}”.`;
      dispatch({ type: 'ADD_MESSAGE', payload: { type: 'bot', text: summary } });
      emit('chatMessage', { text: summary, sender: 'bot' });
    } catch (err) {
      const msg = '⚠️ Sorry, I couldn’t fetch results right now.';
      dispatch({ type: 'ADD_MESSAGE', payload: { type: 'bot', text: msg } });
      emit('chatMessage', { text: msg, sender: 'bot' });
    } finally {
      setLoading(false);
    }
  };

  return { query, setQuery, loading, chatEndRef, handleSend };
}
