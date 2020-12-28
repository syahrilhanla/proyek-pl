import React, { createContext, useReducer, useState } from "react";
import io from "socket.io-client";
import axios from "axios";

const AppReducer = (state, action) => {
	switch (action.type) {
		case "GET_BORROWING_DATA":
			return {
				...state,
				borrowingList: action.payload,
			};
		case "GET_SPECIFIC_BORROWING_DATA":
			return {
				...state,
				specificBorrowingData: action.payload,
			};
		case "GET_CHILD_STATES":
			return {
				...state,
				childStates: action.payload,
			};
		case "GET_PICTURES":
			return {
				...state,
				pictures: action.payload,
			};
		case "ADD_NEW_DATA":
			return {
				...state,
				borrowingList: [action.payload, ...state.borrowingList],
			};
		case "TAKE_LOGIN_INFO":
			return {
				...state,
				loginInfo: [action.payload],
				loggedIn: action.payload.loggedIn,
			};
		case "FETCHING_ERROR":
			return {
				...state,
				error: action.payload,
			};
		case "DELETE_BORROWING_DATA":
			return {
				...state,
				borrowingList: state.borrowingList.filter(
					(data) => data._id !== action.payload
				),
			};
		case "DELETE_LOGIN_DATA":
			return {
				...state,
				loginInfo: [],
				loggedIn: action.payload,
			};
		case "UPDATE_BORROWING_DATA":
			return {
				...state,
				borrowingList: [...state.borrowingList, action.payload],
			};

		default:
			return state;
	}
};

const initialState = {
	borrowingList: [],
	loginInfo: [],
	specificBorrowingData: [],
	childStates: [],
	loggedIn: [],
	pictures: [],
};

export const GlobalContext = createContext(initialState);

// Initialize socket to be global
let socket;

export const GlobalProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);

	// to check if there's any recent update
	const [updateState, setUpdateState] = useState(false);

	const getBorrowingData = async () => {
		try {
			const res = await axios.get("/api/v1/borrowingData");
			socket = io("http://localhost:5000");

			dispatch({
				type: "GET_BORROWING_DATA",
				payload: res.data.data,
			});
		} catch (err) {
			dispatch({
				type: "FETCHING_ERROR",
				payload: err.response,
			});
		}
	};

	const getLoginInfo = async () => {
		try {
			// get login info from localStorage, so when the page refreshes it loads the data from there
			const loginInfo = localStorage.getItem("loginInfo");

			if (initialState.loginInfo.length >= 1) {
				delete initialState.loginInfo[1];
			}

			initialState.loginInfo.push(JSON.parse(loginInfo));
		} catch (err) {
			alert("tidak bisa mengambil login info");
		}
	};

	const getChildStates = (states) => {
		try {
			dispatch({
				type: "GET_CHILD_STATES",
				payload: states,
			});
		} catch (err) {
			alert("failed to get child states");
		}
	};

	const getSpecificBorrowingData = async (id) => {
		try {
			const res = await axios.get(`/api/v1/borrowingData/${id}`);

			dispatch({
				type: "GET_SPECIFIC_BORROWING_DATA",
				payload: res.data.data,
			});
		} catch (err) {
			dispatch({
				type: "FETCHING_ERROR",
				payload: err.response,
			});
		}
	};

	const getPictures = async () => {
		try {
			const res = await axios.get("/files");

			dispatch({
				type: "GET_PICTURES",
				payload: res.data,
			});
		} catch (err) {
			dispatch({
				type: "FETCHING_ERROR",
				payload: err.response,
			});
		}
	};

	const addNewBorrowing = async (newData) => {
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};

		const newBorrowing = "There' New Proposal";
		socket.emit("newBorrowing", newBorrowing);

		try {
			const res = await axios.post("/api/v1/borrowingData", newData, config);

			dispatch({
				type: "ADD_NEW_DATA",
				payload: res.data.data,
			});
		} catch (err) {
			dispatch({
				type: "FETCHING_ERROR",
				payload: err.response.data.error,
			});
		}
	};

	const takeLoginInfo = (newLogin) => {
		// Save loginInfo to local storage so it can be retrieved when the page refreshes
		localStorage.setItem("loginInfo", JSON.stringify(newLogin));
		const loggedIn = true;

		dispatch({
			type: "TAKE_LOGIN_INFO",
			payload: { newLogin, loggedIn },
		});
	};

	const deleteBorrowingData = async (id, filename) => {
		try {
			console.log(filename);
			await axios.delete(`/api/v1/borrowingData/${id}`);
			await axios.delete(`http://localhost:5000/files/${filename}`);

			dispatch({
				type: "DELETE_BORROWING_DATA",
				payload: id,
			});
		} catch (err) {
			dispatch({
				type: "FETCHING_ERROR",
				payload: err.response.data.error,
			});
		}
	};

	const deleteLoginData = async () => {
		try {
			localStorage.removeItem("loginInfo");

			dispatch({
				type: "DELETE_LOGIN_DATA",
				payload: false,
			});
		} catch (err) {
			console.log(err);
		}
	};

	const updateBorrowingData = async (id, status) => {
		console.log(id);
		try {
			const res = await axios.put(`/api/v1/borrowingData/${id}`, {
				status: status + 1,
			});

			// if triggered then fires back to HomeAdmin page, then triggers to re-render the page
			setUpdateState(!updateState);

			const newStatus = "There's new status update";
			socket.emit("newStatus", newStatus);

			dispatch({
				type: "UPDATE_BORROWING_DATA",
				payload: res.data.data,
			});
		} catch (err) {
			dispatch({
				type: "FETCHING_ERROR",
				payload: err,
			});
			console.log(err);
		}
	};

	return (
		<GlobalContext.Provider
			value={{
				borrowingList: state.borrowingList,
				loginInfo: state.loginInfo,
				specificBorrowingData: state.specificBorrowingData,
				childStates: state.childStates,
				loggedIn: state.loggedIn,
				pictures: state.pictures,
				updateState,
				addNewBorrowing,
				takeLoginInfo,
				getBorrowingData,
				deleteBorrowingData,
				updateBorrowingData,
				getSpecificBorrowingData,
				deleteLoginData,
				getLoginInfo,
				getChildStates,
				getPictures,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};
