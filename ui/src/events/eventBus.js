import { AgenticEventSchema } from './eventSchema';

const callbacks = {};

export function on(eventName, cb) {
  if (!AgenticEventSchema[eventName]) {
    console.warn(`[AgenticAI] Unknown event type: ${eventName}`);
    return;
  }
  if (!callbacks[eventName]) callbacks[eventName] = [];
  callbacks[eventName].push(cb);
}

export function emit(eventName, data) {
  const schema = AgenticEventSchema[eventName];

  if (!schema) {
    console.warn(`[AgenticAI] Unknown event emitted: ${eventName}`);
    return;
  }

  // ✅ Validate payload
  const valid = schema.validate(data);
  if (!valid) {
    console.warn(`[AgenticAI] Invalid payload for "${eventName}"`, data);
    return;
  }

  // ✅ Invoke merchant callbacks
  const registered = callbacks[eventName] || [];
  if (registered.length === 0) {
    schema.defaultHandler(data); // fallback if no merchant handler
  } else {
    registered.forEach((cb) => {
      try {
        cb(data);
      } catch (err) {
        console.error(`[AgenticAI] Error in ${eventName} callback:`, err);
      }
    });
  }

  // ✅ Emit legacy DOM event for backward compatibility
  window.dispatchEvent(new CustomEvent(`agentic:${eventName}`, { detail: data }));
}
