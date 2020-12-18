import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from './globalState/GlobalState';

import './Dropdown.css';

export const Dropdown = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const { borrowingList } = useContext(GlobalContext);

    return (
        <>
            <ul onClick={handleClick}
                className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
                {borrowingList.map((item, index) => {
                    return (
                        <li key={index}>
                            {item.name}
                        </li>
                    )
                })}
            </ul>
        </>
    )
}
