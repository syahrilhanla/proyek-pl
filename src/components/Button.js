import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

export const Button = () => {
    return (
        <Link to='/sign-up'>
            <button className='btn'>Log Out</button>
        </Link>
    );
}
