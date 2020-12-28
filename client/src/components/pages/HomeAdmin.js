import React, { useContext, useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { TimeLineCardNew } from "../TimeLineCardNew";
import { GlobalContext } from "../globalState/GlobalState";
import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import Alerts from "../Alerts";
import { io } from "socket.io-client";

// Check if logged in
export const checkLogin = (loginInfo) => {
	if (loginInfo[0] !== null) {
		return true;
	} else {
		return false;
	}
};

export const HomeAdmin = () => {
	const {
		borrowingList,
		getBorrowingData,
		getLoginInfo,
		updateState,
		getPictures,
	} = useContext(GlobalContext);

	const [invisible, setInvisible] = useState(true);
	const [alertColor, setAlertColor] = useState("");
	const [alertText, setAlertText] = useState("");
	const [open, setOpen] = useState(false);

	useEffect(() => {
		getBorrowingData();
		getLoginInfo();
		setInvisible(false);
		setTimeout(() => {
			console.log("borrowingList", borrowingList);
		}, 5000);
	}, [updateState]);

	useEffect(() => {
		getPictures();
	}, []);

	let socket = io("http://localhost:5000");

	socket.on("notification", (notification) => {
		setAlertColor("error");
		setAlertText("There's an Update, Reload the Page!");
		setOpen(true);
		return (
			<Alerts isOpen={open} alertColor={alertColor} alertText={alertText} />
		);
	});

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
					<div style={{ height: "470px", overflow: "auto" }}>
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
			<>{checkLogin ? <Home /> : <Redirect to='/' />}</>
			<Footer />
		</>
	);
};
