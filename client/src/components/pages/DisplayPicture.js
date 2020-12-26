import React, { useContext } from 'react'
import { Footer } from '../Footer';
import { GlobalContext } from '../globalState/GlobalState';

export const DisplayPicture = ({ filename }) => {
    const { pictures } = useContext(GlobalContext);

    const pathname = window.location.pathname.split('/')[2];
    console.log('pathname', pathname);

    const selectedPicture = pictures.filter(picture => picture.filename === pathname);
    console.log(selectedPicture);

    const style = { width: '100%', height: '600px', alignSelf: 'center' };

    return (
        <div style={{ margin: 'auto', width: '700px' }}>
            {selectedPicture.map(picture => (
                <img src={`${pathname}`} alt={picture.filename} style={style} />
            ))}
            <Footer />
        </div>
    )
}
