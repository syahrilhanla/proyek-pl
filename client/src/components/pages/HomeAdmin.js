import React, { useContext, useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { TimeLineCardNew } from "../TimeLineCardNew";
import { GlobalContext } from "../globalState/GlobalState";
import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import Alerts from "../Alerts";
import { socket } from "../socket";

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
		anyUpdate,
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
	}, [anyUpdate]);

	useEffect(() => {
		getPictures();
	}, []);

	socket.on("notification", (notification) => {
		console.log(notification);
		setAlertColor("error");
		setAlertText("Ada Update, Halaman Reload dalam 5 Detik!");
		setTimeout(() => {
			window.location.reload();
		}, 5000);
		setOpen(true);
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
			<Alerts isOpen={open} alertColor={alertColor} alertText={alertText} />
			<Footer />
		</>
	);
};
