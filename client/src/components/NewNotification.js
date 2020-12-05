import React, { useState } from 'react';
import { MenuItems } from './MenuItems';
import './Dropdown.css';

export const NewNotification = () => {


    return (
        <>
            <ul>
                {MenuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            {item.title}
                        </li>
                    )
                })}
            </ul>
        </>
    )
}
