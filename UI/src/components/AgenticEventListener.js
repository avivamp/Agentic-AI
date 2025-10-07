export const AgenticEventListener = {
  dispatch(eventName, payload) {
    const event = new CustomEvent(`agentic:${eventName}`, { detail: payload });
    window.dispatchEvent(event);
  }
};

// Example usage in merchant site:
// AgenticEventListener.dispatch('addToCart', { product_name: "Dior Sauvage 100ml", price: 450 });
