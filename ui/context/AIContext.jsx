import React, { createContext, useReducer, useContext } from 'react';

const AIContext = createContext();

const initialState = {
  messages: [],
  context: { trip: null, cabin: null, user: null }
};

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return { ...state, messages: [...state.messages, action.payload] };
    case 'SET_CONTEXT':
      return { ...state, context: { ...state.context, ...action.payload } };
    default:
      return state;
  }
}

export function AIProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <AIContext.Provider value={{ state, dispatch }}>{children}</AIContext.Provider>;
}

export const useAI = () => useContext(AIContext);
