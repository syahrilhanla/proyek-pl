import React, { createContext, useReducer } from 'react';

const AppReducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

const initialState = {
    content: [
        {
            nama: 'Syahril',
            umur: 21
        },
        {
            nama: 'Ka Faridah',
            umur: 22
        },
        {
            nama: 'Syarifah',
            umur: 21
        },
    ]
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (
        <GlobalContext.Provider value={{ content: state.content }}>
            {children}
        </GlobalContext.Provider>
    )
}