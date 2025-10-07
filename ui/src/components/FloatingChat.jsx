import React, { useState, useEffect } from 'react';
import { useAI } from '../context/AIContext';
import ChatBubble from './ChatBubble';

export default function FloatingChat() {
  const { state, dispatch } = useAI();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleEvent = (e) => {
      if (e.type === 'agentic:addToCart') {
        const { product_name } = e.detail;
        dispatch({
          type: 'ADD_MESSAGE',
          payload: { type: 'bot', text: `✅ Added ${product_name} to your cart! Want to checkout?` }
        });
        setOpen(true);
      }
    };
    window.addEventListener('agentic:addToCart', handleEvent);
    return () => window.removeEventListener('agentic:addToCart', handleEvent);
  }, [dispatch]);

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {!open && (
        <button
          className="bg-blue-600 text-white p-4 rounded-full shadow-lg"
          onClick={() => setOpen(true)}
        >💬</button>
      )}
      {open && (
        <div className="bg-white rounded-2xl shadow-xl w-80 h-96 flex flex-col">
          <div className="flex justify-between items-center bg-blue-600 text-white p-3 rounded-t-2xl">
            <span>Agentic Assistant</span>
            <button onClick={() => setOpen(false)}>✕</button>
          </div>
          <div className="flex-1 overflow-y-auto p-3">
            {state.messages.map((m, i) => (
              <ChatBubble key={i} message={m.text} type={m.type} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
