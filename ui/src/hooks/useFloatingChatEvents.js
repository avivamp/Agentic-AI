import { useEffect } from 'react';

export function useFloatingChatEvents(dispatch, emit, setOpen) {
  useEffect(() => {
    const handleAddToCart = (e) => {
      const { productId, name, price } = e.detail || {};
      const message = `✅ Added ${name || 'an item'} to your cart for ${price || ''}. Want to checkout?`;
      dispatch({ type: 'ADD_MESSAGE', payload: { type: 'bot', text: message } });
      emit('chatMessage', { text: message, sender: 'bot' });
      emit('addToCart', { productId, name, price });
      setOpen(true);
    };
    window.addEventListener('agentic:addToCart', handleAddToCart);
    return () => window.removeEventListener('agentic:addToCart', handleAddToCart);
  }, [dispatch, emit, setOpen]);
}
