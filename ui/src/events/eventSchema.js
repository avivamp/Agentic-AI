export const AgenticEventSchema = {
  searchResults: {
    description: "Fired when search results are returned.",
    required: ["results"],
    validate: (p) => p && Array.isArray(p.results),
    defaultHandler: (p) => console.log("[AgenticAI] Search:", p),
  },
  addToCart: {
    description: "Product added to cart.",
    required: ["productId", "name"],
    validate: (p) => p?.productId && p?.name,
    defaultHandler: (p) => console.log("[AgenticAI] AddToCart:", p),
  },
  checkout: {
    description: "Checkout initiated.",
    required: [],
    validate: () => true,
    defaultHandler: () => console.log("[AgenticAI] Checkout triggered."),
  },
  chatMessage: {
    description: "Chat message sent or received.",
    required: ["text", "sender"],
    validate: (p) => !!p?.text,
    defaultHandler: () => {},
  },
};
