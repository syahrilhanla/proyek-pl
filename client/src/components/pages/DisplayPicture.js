import React, { useContext } from 'react'
import { GlobalContext } from '../globalState/GlobalState';

export const DisplayPicture = ({ filename }) => {
    const { pictures } = useContext(GlobalContext);

    const pathname = window.location.pathname.split('/')[2];
    console.log('pathname', pathname);

    const selectedPicture = pictures.filter(picture => picture.filename === pathname);

    return (
        <div style={{ boxSizing: 'border-box', padding: '0px', margin: '0px' }}>
            { selectedPicture.map(picture => (
                <img src={`${pathname}`} alt={picture.filename} style={{ width: '400px', height: '400px' }} />
            ))}
        </div>
    )
}
