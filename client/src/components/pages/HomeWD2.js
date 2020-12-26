import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../globalState/GlobalState";
import { Navbar } from "../Navbar";
import { Redirect, useHistory } from "react-router-dom";
import { checkLogin } from "./HomeAdmin";
import { TimeLineCardNew } from "../TimeLineCardNew";
import { Footer } from "../Footer";

export const HomeWD2 = () => {
	const {
		borrowingList,
		getBorrowingData,
		updateState,
		loginInfo,
		getLoginInfo,
		getPictures,
		pictures
	} = useContext(GlobalContext);
	const [invisible, setInvisible] = useState(true);
	const history = useHistory();

	useEffect(() => {
		getBorrowingData();
		setInvisible(false);
		getLoginInfo();
	}, [updateState]);

	useEffect(() => {
		getPictures();
	}, []);

	const Home = () => {
		return (
			<>
				<div className='container'>
					<label>
						<h1 style={{ borderBottom: "2px solid #b8bdb5" }}>Lini Masa</h1>
					</label>
					<div style={{ height: "470px", overflow: "auto" }}>
						{borrowingList
							.filter((list) => list.status === 2)
							.map((list) => (
								<TimeLineCardNew key={list._id} borrowingList={list} />
							))}
					</div>
				</div>
			</>
		);
	};

	return (
		<>
			<Navbar user={"adm"} invisible={invisible} setInvisible={setInvisible} />
			{checkLogin(loginInfo, history) ? <Home /> : <Redirect to='/' />}
			<Footer />
		</>
	);
};
