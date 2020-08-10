import React, { createContext, useContext, useReducer } from "react";

//Data Layer
export const StateContext = createContext();

//Provider - To Wrap App
// reducer as Store
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//This is how we use it inside of a component
export const useStateValue = () => useContext(StateContext);
