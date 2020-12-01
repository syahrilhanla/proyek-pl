import React, { useContext } from 'react';
import { GlobalContext } from '../globalState/GlobalState';

const Home = () => {
    const { content } = useContext(GlobalContext);

    return (
        <>
            <h1 className="consulting">HOME</h1>
        </>
    )
}
export default Home
