import React, { createContext, useReducer } from 'react';

const AppReducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

const initialState = {
    borrowingList: [
        {
            nama: 'Syahril',
            nim: 1710131110017,
            ruangan: 'Ruangan 32',
            awalPinjam: '8 January 2020',
            akhirPinjam: '9 January 2020'
        },
        {
            nama: 'Jones',
            nim: 1710131110017,
            ruangan: 'Ruangan 27',
            awalPinjam: '8 January 2020',
            akhirPinjam: '9 January 2020'
        },
        {
            nama: 'Jonathan',
            nim: 1710131110017,
            ruangan: 'Ruangan 25',
            awalPinjam: '8 January 2020',
            akhirPinjam: '9 January 2020'
        }
    ],
    loginInfo: {
        nama: 'Syahril',
        nim: 1710131110017,
        email: 'syahrilhanla\@gmail.com'
    }
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (
        <GlobalContext.Provider value={{ borrowingList: state.borrowingList, loginInfo: state.loginInfo }}>
            {children}
        </GlobalContext.Provider>
    )
}