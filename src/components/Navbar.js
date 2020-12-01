import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import { Dropdown } from './Dropdown';
import './Navbar.css';

export const Navbar = () => {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

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
                <Link to="/" className="navbar-logo">
                    LOGO
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>

                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                            Beranda
                        </Link>
                    </li>
                    <li
                        className="nav-item"
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}>
                        <Link to="/services" className="nav-links" onClick={closeMobileMenu}>
                            Layanan <i className="fa fa-caret-down" />
                        </Link>
                        {dropdown && <Dropdown />}
                    </li>
                    <li className="nav-item">
                        <Link to="/contact-us" className="nav-links" onClick={closeMobileMenu}>
                            <i className="far fa-bell"></i>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/sign-up" className="nav-links-mobile" onClick={closeMobileMenu}>
                            Log Out
                        </Link>
                    </li>
                </ul>
                <Button />
            </nav>
        </>
    )
}

