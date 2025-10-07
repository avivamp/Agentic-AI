import { useState, useEffect } from 'react';

export function useAgenticMessages(initial = []) {
  const [messages, setMessages] = useState(initial);

  useEffect(() => {
    function handleAddToCart(e) {
      const { product_name } = e.detail;
      setMessages((m) => [
        ...m,
        { message: `✅ Added ${product_name} to your cart!`, type: 'bot' },
        { message: 'Would you like to checkout now or see similar items?', type: 'bot' },
      ]);
    }
    window.addEventListener('agentic:addToCart', handleAddToCart);
    return () => window.removeEventListener('agentic:addToCart', handleAddToCart);
  }, []);

  return [messages, setMessages];
}
