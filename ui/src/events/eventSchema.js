// Central event registry: event name, schema, default handler

export const AgenticEventSchema = {
  searchResults: {
    description: "Fired when Agentic search returns product results.",
    required: ["results"],
    validate: (payload) =>
      payload && Array.isArray(payload.results),
    defaultHandler: (data) => console.log("[AgenticAI] Search Results:", data),
  },

  addToCart: {
    description: "Triggered when a product is added to the cart.",
    required: ["productId", "name"],
    validate: (payload) =>
      payload && typeof payload.productId === "string" && payload.name,
    defaultHandler: (data) => console.log("[AgenticAI] Added to cart:", data),
  },

  checkout: {
    description: "User initiated checkout flow.",
    required: [],
    validate: () => true,
    defaultHandler: () => console.log("[AgenticAI] Checkout initiated."),
  },

  chatMessage: {
    description: "Emitted on every chat message (bot or user).",
    required: ["text", "sender"],
    validate: (payload) => !!payload.text,
    defaultHandler: () => {},
  },
};
