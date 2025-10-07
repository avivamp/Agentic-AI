import { AgenticEventSchema } from "./eventSchema";
const callbacks = {};

export function on(eventName, cb) {
  if (!AgenticEventSchema[eventName]) {
    console.warn(`[AgenticAI] Unknown event: ${eventName}`);
    return;
  }
  if (!callbacks[eventName]) callbacks[eventName] = [];
  callbacks[eventName].push(cb);
}

export function emit(eventName, data) {
  const schema = AgenticEventSchema[eventName];
  if (!schema) return console.warn(`[AgenticAI] Unknown event: ${eventName}`);

  if (!schema.validate(data)) {
    console.warn(`[AgenticAI] Invalid payload for ${eventName}`, data);
    return;
  }

  const regs = callbacks[eventName] || [];
  if (regs.length === 0) schema.defaultHandler(data);
  else regs.forEach((cb) => cb(data));

  window.dispatchEvent(new CustomEvent(`agentic:${eventName}`, { detail: data }));
}
