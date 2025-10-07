import React, { useState } from "react";
import { useAI } from "../context/AIContext";
import ChatBubble from "./AgenticChatBubble";
import { emit } from "../events/eventBus";
import { useFloatingChatEvents } from '../hooks/useFloatingChatEvents';

export default function FloatingChat() {
  const { state, dispatch } = useAI();
  const [open, setOpen] = useState(false);
  useFloatingChatEvents(dispatch, emit, setOpen);

  const handleCheckout = () => {
    const msg = "Redirecting to checkout...";
    dispatch({ type: "ADD_MESSAGE", payload: { type: "bot", text: msg } });
    emit("chatMessage", { text: msg, sender: "bot" });
    emit("checkout", { timestamp: Date.now() });
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 agentic-chat-widget">
      {!open ? (
        <button
          className="bg-[var(--agentic-primary)] text-white p-4 rounded-full shadow-lg"
          onClick={() => setOpen(true)}
        >
          💬
        </button>
      ) : (
        <div className="bg-white rounded-2xl shadow-xl w-80 h-96 flex flex-col overflow-hidden">
          <div className="agentic-chat-header flex justify-between items-center">
            <span>Agentic Assistant</span>
            <button onClick={() => setOpen(false)}>✕</button>
          </div>

          <div className="flex-1 overflow-y-auto p-3">
            {state.messages.map((m, i) => (
              <ChatBubble key={i} message={m.text} type={m.type} />
            ))}
          </div>

          <div className="border-t p-2 text-center">
            <button
              className="bg-[var(--agentic-primary)] text-white px-4 py-2 rounded-lg w-full"
              onClick={handleCheckout}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
