import React, { createContext, useReducer, useState } from 'react';
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
                borrowingList: [action.payload, ...state.borrowingList]
            }

        case 'TAKE_LOGIN_INFO':
            return {
                ...state,
                loginInfo: [action.payload, ...state.loginInfo]
            }
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
        case 'UPDATE_BORROWING_DATA':
            return {
                ...state,
                borrowingList: [...state.borrowingList, action.payload]
            }

        default:
            return state;
    }
}

const initialState = {
    borrowingList: [],
    loginInfo: []
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    const [updateState, setUpdateState] = useState(false);

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
                payload: err.response
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
        console.log(id);
    }

    const updateBorrowingData = async (id, status) => {

        try {
            console.log(status);
            const res = await axios.put(`/api/v1/borrowingData/${id}`, {status: status + 1});
            setUpdateState(!updateState);

            dispatch({
                type: 'UPDATE_BORROWING_DATA',
                payload: res.data.data
            });
        } catch (err) {
            dispatch({
                type: 'FETCHING_ERROR',
                payload: err
            });
            console.log(err)
        }
        console.log(id);
    }

    return (
        <GlobalContext.Provider value={{
            borrowingList: state.borrowingList,
            loginInfo: state.loginInfo,
            addNewBorrowing,
            takeLoginInfo,
            getBorrowingData,
            deleteBorrowingData,
            updateBorrowingData,
            updateState
        }}>
            {children}
        </GlobalContext.Provider>
    )
}