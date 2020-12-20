import React, { useContext, useEffect, useState } from "react";
import { TimeLineCard } from "../TimeLineCard";
import { GlobalContext } from "../globalState/GlobalState";
import { Navbar } from "../Navbar";
import { Redirect, useHistory } from "react-router-dom";
import { checkLogin } from "./HomeAdmin";

export const HomeWD2 = () => {
	const {
		borrowingList,
		getBorrowingData,
		updateState,
		loginInfo,
		getLoginInfo,
	} = useContext(GlobalContext);
	const [invisible, setInvisible] = useState(true);
	const history = useHistory();

	useEffect(() => {
		getBorrowingData();
		setInvisible(false);
		getLoginInfo();
	}, [updateState]);

	const Home = () => {
		return (
			<>
				<div className='container'>
					<label>
						<h1 style={{ borderBottom: "2px solid #b8bdb5" }}>Lini Masa</h1>
					</label>
					{borrowingList
						.filter((list) => list.status === 2)
						.map((list) => (
							<TimeLineCard key={list._id} borrowingList={list} />
						))}
				</div>
			</>
		);
	};

	return (
		<>
			<Navbar user={"adm"} invisible={invisible} setInvisible={setInvisible} />
			{checkLogin(loginInfo, history) ? <Home /> : <Redirect to='/' />}
		</>
	);
};
