import { Badge } from '@material-ui/core';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NotificationsIcon from '@material-ui/icons/Notifications';
import './Navbar.css';
import { Sidebar } from './Sidebar';
import { SidebarDataADM } from './SidebarDataADM';
import { SidebarData } from './SidebarData';

export const Navbar = ({user}) => {
    const [click, setClick] = useState(false);
    let [notifications, setNotifications] = useState(1);

    // Checks if its mhs or adm to choose sidebar
    const chooseSidebar = (user) => {
        if (user === 'adm') {
            return SidebarDataADM
        } else {
            return SidebarData
        }
    }

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <>
            <nav className="navbar">

                <Sidebar sideBarData={chooseSidebar(user)}/>
                <Link to={`/${user}`} className="navbar-logo">
                    LOGO
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>

                <ul className={click ? 'nav-menu active' : 'nav-menu'}>

                    <li className="nav-item">
                        <div className="nav-links not" onClick={closeMobileMenu}>
                            <Badge badgeContent={notifications} color="secondary">
                                <NotificationsIcon />
                            </Badge>
                        </div>

                    </li>
                    <li className="nav-item">
                        <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                            <i className="fas fa-sign-out-alt"></i>
                        </Link>
                    </li>

                </ul>

            </nav>
        </>
    )
}

