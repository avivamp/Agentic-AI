import React from 'react';
import { motion } from 'framer-motion';

export default function AgenticChatBubble({ message, type = 'bot' }) {
  const isUser = type === 'user';
  return (
    <motion.div
      className={`p-3 my-2 max-w-[80%] rounded-2xl ${
        isUser ? 'bg-blue-600 text-white ml-auto' : 'bg-gray-200 text-black'
      }`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {message}
    </motion.div>
  );
}
