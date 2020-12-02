import React, { createContext, useReducer } from 'react';

const AppReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_NEW_DATA':
            return {
                ...state,
                borrowingList: [action.payload, ...state.borrowingList]
            }

        default:
            return state;
    }
}

const initialState = {
    borrowingList: [
        {
            name: 'Syahril',
            nim: 1710131110017,
            room: 'Ruang 32',
            startDate: '8 January 2020',
            time: '08:00-10:00',
            status: 'new-borrowing',
        },
        {
            name: 'Jones',
            nim: 1710131110017,
            room: 'Ruang 27',
            startDate: '8 January 2020',
            time: '08:00-10:00',
            status: 'approved',
        },
        {
            name: 'Jonathan',
            nim: 1710131110017,
            room: 'Ruang 25',
            startDate: '8 January 2020',
            time: '08:00-10:00',
            status: 'waiting-verification',
        }
    ],
    loginInfo: {
        name: 'Syahril',
        nim: 1710131110017,
        email: 'syahrilhanla\@gmail.com'
    }
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    const addNewBorrowing = (newData) => {
        dispatch({
            type: 'ADD_NEW_DATA',
            payload: newData
        });
    }

    return (
        <GlobalContext.Provider value={{ borrowingList: state.borrowingList, loginInfo: state.loginInfo, addNewBorrowing }}>
            {children}
        </GlobalContext.Provider>
    )
}