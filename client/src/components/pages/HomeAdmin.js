import React, { useContext, useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { TimeLineCardNew } from "../TimeLineCardNew";
import { GlobalContext } from "../globalState/GlobalState";
import { Navbar } from "../Navbar";
import { Footer } from "../Footer";

// Check if logged in
export const checkLogin = (loginInfo, history) => {
	if (loginInfo[0] !== null) {
		console.log("sudah login");
		return true;
	} else {
		console.log("tidak login");
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

	useEffect(() => {
		getBorrowingData();
		getLoginInfo();
		setInvisible(false);
	}, [updateState]);

	const Home = () => {
		return (
			<>
				<div className='container'>
					<label>
						<h1
							style={{
								borderBottom: "2px solid #b8bdb5",
								marginTop: "-20px",
							}}
						>
							Lini Masa
						</h1>
					</label>
					<div style={{ height: "490px", overflow: "auto" }}>
						{borrowingList.map((list) => (
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
			<>{checkLogin(loginInfo) ? <Home /> : <Redirect to='/' />}</>
			<Footer />
		</>
	);
};
