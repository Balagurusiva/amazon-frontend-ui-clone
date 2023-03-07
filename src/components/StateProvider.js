import React,{createContext,useContext, useReducer} from 'react'

//create the data layer
export const StateContext = createContext()


//wrap app componentent and provide the data layer to it
export const StateProvider =({reducer,initailState, children})=>(
    <StateContext.Provider value={useReducer(reducer,initailState)}>
        {children}
    </StateContext.Provider>
)

//pull info from the data layer
export const useStateValue =() =>useContext(StateContext);