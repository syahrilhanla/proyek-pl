import React, { createContext, useReducer } from 'react';
import axios from 'axios';

const AppReducer = (state, action) => {
    switch (action.type) {
        case 'GET_BORROWING_DATA':
            return {
                ...state,
                borrowingList: action.payload
            }
        case 'ADD_NEW_DATA':
            return {
                ...state,
                borrowingList: [...state.borrowingList, action.payload]
            }

        // case 'TAKE_LOGIN_INFO':
        //     return {
        //         ...state,
        //         loginInfo: [action.payload, ...state.loginInfo]
        //     }
        case 'FETCHING_ERROR':
            return {
                ...state,
                error: action.payload
            }
        case 'DELETE_BORROWING_DATA':
            return {
                ...state,
                borrowingList: state.borrowingList.filter(data => data._id !== action.payload)
            }

        default:
            return state;
    }
}

const initialState = {
    borrowingList: [
        // {
        //     name: 'Syahril',
        //     nim: 1710131110017,
        //     room: 'Ruang 32',
        //     startDate: '8 January 2020',
        //     time: '08:00-10:00',
        //     status: 'new-borrowing',
        // },
        // {
        //     name: 'Jones',
        //     nim: 1710131110017,
        //     room: 'Ruang 27',
        //     startDate: '8 January 2020',
        //     time: '08:00-10:00',
        //     status: 'approved',
        // },
        // {
        //     name: 'Jonathan',
        //     nim: 1710131110017,
        //     room: 'Ruang 25',
        //     startDate: '8 January 2020',
        //     time: '08:00-10:00',
        //     status: 'waiting-verification',
        // }
    ],
    loginInfo: {
        email: 'syahrilhanla\@gmail.com',
        password: 'jones_johnson',
        name: 'Syahril',
        nim: 1710131110017
    }
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    const getBorrowingData = async () => {
        try {
            const res = await axios.get('/api/v1/borrowingData');

            dispatch({
                type: 'GET_BORROWING_DATA',
                payload: res.data.data
            });
        } catch (err) {
            dispatch({
                type: 'FETCHING_ERROR',
                payload: err.response.data.error
            });
        }
    }

    const addNewBorrowing = async (newData) => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        try {
            const res = await axios.post('/api/v1/borrowingData', newData, config);

            dispatch({
                type: 'ADD_NEW_DATA',
                payload: res.data.data
            });
        } catch (err) {
            dispatch({
                type: 'FETCHING_ERROR',
                payload: err.response.data.error
            });
        }
    }

    const takeLoginInfo = (newLogin) => {
        dispatch({
            type: 'TAKE_LOGIN_INFO',
            payload: newLogin
        });
    }

    // FrontEnd is not built yet
    const deleteBorrowingData = async (id) => {
        try {
            await axios.delete(`/api/v1/borrowingData/${id}`);

            dispatch({
                type: 'DELETE_BORROWING_DATA',
                payload: id
            });
        } catch (err) {
            dispatch({
                type: 'FETCHING_ERROR',
                payload: err.response.data.error
            });
        }
    }

    return (
        <GlobalContext.Provider value={{
            borrowingList: state.borrowingList,
            loginInfo: state.loginInfo,
            addNewBorrowing,
            takeLoginInfo,
            getBorrowingData,
            deleteBorrowingData
        }}>
            {children}
        </GlobalContext.Provider>
    )
}