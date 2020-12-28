import { Avatar, Badge } from "@material-ui/core";
import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import NotificationsIcon from "@material-ui/icons/Notifications";
import "./Navbar.css";
import { Sidebar } from "./Sidebar";
import { SidebarDataADM } from "./SidebarDataADM";
import { SidebarData } from "./SidebarData";
import { Dropdown } from "./Dropdown";
import { GlobalContext } from "./globalState/GlobalState";
import logo from "../assets/logo.png";
import { io } from "socket.io-client";

export const Navbar = ({ user, invisible, setInvisible }) => {
	const [click, setClick] = useState(false);
	const [dropdown, setDropdown] = useState(false);
	const [notificationCount, setNotificationCount] = useState(0);

	console.log("notificationCount", notificationCount);

	const { deleteLoginData, socket } = useContext(GlobalContext);

	useEffect(() => {
		socket.on("notification", (notification) => {
			setNotificationCount(notificationCount + 1);
		});
	}, []);

	// Checks if its mhs or adm to choose sidebar
	const chooseSidebar = (user) => {
		if (user === "adm") {
			return SidebarDataADM;
		} else {
			return SidebarData;
		}
	};

	const handleClick = () => {
		setClick(!click);
		console.log(click);
	};
	const closeMobileMenu = () => {
		setClick(false);
		setNotificationCount(0);
	};

	const showNotification = () => {
		setInvisible(true);
		setDropdown(!dropdown);
		console.log(invisible);
	};

	const logOut = () => {
		closeMobileMenu();
		deleteLoginData();
	};

	const localLoginInfo = JSON.parse(localStorage.getItem("loginInfo"));

	const displayAvatar = () => {
		if (localLoginInfo !== null) {
			return localLoginInfo.photo;
		} else return null;
	};

	return (
		<>
			<nav className='navbar'>
				<Sidebar sideBarData={chooseSidebar(user)} />

				<Link to={`/${user}`} className='navbar-logo.png'>
					<img
						src={logo}
						alt='logo'
						style={{ width: "200px", height: "60px", marginLeft: "30px" }}
					/>
				</Link>

				<div className='menu-icon' onClick={handleClick}>
					<i className={click ? "fas fa-times" : "fas fa-bars"} />
				</div>

				<ul className={click ? "nav-menu active" : "nav-menu"}>
					<li className='nav-item' onClick={() => showNotification()}>
						<div className='nav-links not' onClick={closeMobileMenu}>
							<Badge
								badgeContent=''
								variant='dot'
								invisible={notificationCount < 1 ? true : false}
								color='secondary'
							>
								<NotificationsIcon />
							</Badge>
						</div>
						{dropdown && <Dropdown />}
					</li>

					<li className='nav-item'>
						<Avatar alt='user' src={displayAvatar()} />
					</li>

					<li className='nav-item'>
						<Link to='/' className='nav-links' onClick={() => logOut()}>
							<i className='fas fa-sign-out-alt'></i>
						</Link>
					</li>
				</ul>
			</nav>
		</>
	);
};
