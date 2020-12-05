import { Badge, Divider } from '@material-ui/core';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import { Dropdown } from './Dropdown';
import { NewNotification } from './NewNotification';
import NotificationsIcon from '@material-ui/icons/Notifications';
import './Navbar.css';

export const Navbar = () => {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const [newNotification, setNewNotification] = useState(false);
    let [notifications, setNotifications] = useState(0);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const onMouseClick = () => {
        setNewNotification(!newNotification);
    }

    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(true);
        }
    }

    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(false);
        }
    }

    return (
        <>
            <nav className="navbar">
                <Link to="/adm" className="navbar-logo">
                    LOGO
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>

                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to="/mhs" className="nav-links" onClick={closeMobileMenu}>
                            Beranda
                        </Link>
                    </li>
                    <li
                        className="nav-item"
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}>
                        <div className="nav-links" onClick={closeMobileMenu}>
                            Layanan <i className="fa fa-caret-down" />
                        </div>
                        {dropdown && <Dropdown />}
                    </li>
                    <li className="nav-item">
                        <div onClick={onMouseClick} className="nav-links not" onClick={closeMobileMenu}>
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

