import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

export const Button = ({ text, goTo }) => {
    return (
        <Link to={'/', goTo}>
            <button className='btn'>{text}</button>
        </Link>
    );
}
