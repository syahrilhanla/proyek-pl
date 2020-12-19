import { Avatar, Badge } from "@material-ui/core";
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import NotificationsIcon from "@material-ui/icons/Notifications";
import "./Navbar.css";
import { Sidebar } from "./Sidebar";
import { SidebarDataADM } from "./SidebarDataADM";
import { SidebarData } from "./SidebarData";
import { Dropdown } from "./Dropdown";
import { GlobalContext } from "./globalState/GlobalState";

export const Navbar = ({ user, invisible, setInvisible }) => {
	const [click, setClick] = useState(false);
	const [dropdown, setDropdown] = useState(false);

	const { deleteLoginData, loginInfo } = useContext(GlobalContext);

	// Checks if its mhs or adm to choose sidebar
	const chooseSidebar = (user) => {
		if (user === "adm") {
			return SidebarDataADM;
		} else {
			return SidebarData;
		}
	};

	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);

	const showNotification = () => {
		setInvisible(true);
		setDropdown(!dropdown);
	};

	const logOut = () => {
		closeMobileMenu();
		deleteLoginData();
	};

	const localLoginInfo = JSON.parse(localStorage.getItem("loginInfo"));

	const displayAvatar = () => {
		console.log(localLoginInfo);
		if (localLoginInfo !== null) {
			return localLoginInfo.photo;
		} else return null;
	};

	return (
		<>
			<nav className='navbar'>
				<Sidebar sideBarData={chooseSidebar(user)} />
				<Link to={`/${user}`} className='navbar-logo'>
					LOGO
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
								invisible={invisible}
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
