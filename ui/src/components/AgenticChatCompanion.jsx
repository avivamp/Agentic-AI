import React, { useState, useEffect } from 'react';
import AgenticChatBubble from './AgenticChatBubble';
import AgenticChatCTA from './AgenticChatCTA';
import { motion } from 'framer-motion';

export default function AgenticChatCompanion() {
  const [messages, setMessages] = useState([
    { message: "Hi there 👋 How can I help you shop today?", type: "bot" }
  ]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    window.addEventListener('agentic:addToCart', (e) => {
      const { product_name } = e.detail;
      setMessages((m) => [
        ...m,
        { message: `✅ Added ${product_name} to your cart!`, type: "bot" },
        { message: "Would you like to checkout now or see similar items?", type: "bot" }
      ]);
    });
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {!isOpen ? (
        <motion.button
          className="bg-blue-600 text-white p-4 rounded-full shadow-lg"
          onClick={() => setIsOpen(true)}
          whileHover={{ scale: 1.1 }}
        >
          💬
        </motion.button>
      ) : (
        <motion.div
          className="bg-white shadow-xl rounded-2xl w-80 h-96 flex flex-col"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
        >
          <div className="flex justify-between items-center bg-blue-600 text-white p-3 rounded-t-2xl">
            <span>Agentic Chat</span>
            <button onClick={() => setIsOpen(false)}>✕</button>
          </div>
          <div className="flex-1 overflow-y-auto p-3">
            {messages.map((msg, idx) => (
              <AgenticChatBubble key={idx} {...msg} />
            ))}
          </div>
          <div className="p-3 border-t">
            <AgenticChatCTA label="Checkout →" onClick={() => alert('Redirect to checkout')} />
          </div>
        </motion.div>
      )}
    </div>
  );
}
