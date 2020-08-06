//setup data layer
//We need this to track the basket.

import React, { createContext, useContext, useReducer } from 'react';

//This is the data layer.
export const StateContext = createContext();

//BUILD A PROVIDOR
export const StateProvidor = ({ reducer, initialState, children }) => (
	<StateContext.Provider value={useReducer(reducer, initialState)}>{children}</StateContext.Provider>
);

//THIS IS HOW WE USE IT INSIDE OF A COMPONENT
export const useStateValue = () => useContext(StateContext);
