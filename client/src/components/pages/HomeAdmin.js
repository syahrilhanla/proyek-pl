import React, { useContext, useEffect } from 'react';
import { TimeLineCard } from '../TimeLineCard';
import { GlobalContext } from '../globalState/GlobalState';
import { Navbar } from '../Navbar';


export const HomeAdmin = () => {

    const { borrowingList, getBorrowingData } = useContext(GlobalContext);

    useEffect(() => {
        getBorrowingData();
    }, []);

    return (
        <>
            <Navbar user={'adm'}/>

            <div className="container">
                <h1>Lini Masa</h1>
                {borrowingList.map(list => (
                    <TimeLineCard key={list._id} borrowingList={list} />
                ))}
            </div>
        </>

    )
}
