import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { TimeLineCard } from "../TimeLineCard";
import { GlobalContext } from "../globalState/GlobalState";
import { Navbar } from "../Navbar";

// Check if logged in
export const checkLogin = (loginInfo, history) => {
	if (loginInfo[0] !== null) {
		console.log("sudah login");
		return true;
	} else {
		console.log("tidak login");
		// history.push("/");
		return false;
	}
};

export const HomeAdmin = () => {
	const {
		borrowingList,
		getBorrowingData,
		getLoginInfo,
		updateState,
		loginInfo,
	} = useContext(GlobalContext);

	const [invisible, setInvisible] = useState(true);
	const history = useHistory();

	useEffect(() => {
		getBorrowingData();
		getLoginInfo();
		setInvisible(false);

		setTimeout(() => {
			console.log(borrowingList);
		}, 2000);
	}, [updateState]);

	// Redirect if not logged in
	checkLogin(loginInfo, history);

	return (
		<>
			<Navbar user={"adm"} invisible={invisible} setInvisible={setInvisible} />

			<div className='container'>
				<label>
					<h1 style={{ borderBottom: "2px solid #b8bdb5" }}>Lini Masa</h1>
				</label>
				{borrowingList.map((list) => (
					<TimeLineCard key={list._id} borrowingList={list} />
				))}
			</div>
		</>
	);
};
