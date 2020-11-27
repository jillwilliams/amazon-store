import React, { createContext, useContext, useReducer } from 'react';
// prepares the data layer
export const StateContext = createContext();
// wrap our app and provide the data layer access to all components
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);
// pull info from our data layer
export const useStateValue = () => useContext(StateContext);
