import React, { useContext, useEffect } from 'react';
import { TimeLineCard } from '../TimeLineCard';
import { GlobalContext } from '../globalState/GlobalState';
import { Navbar } from '../Navbar';


export const HomeAdmin = () => {

    const { borrowingList, getBorrowingData, updateState } = useContext(GlobalContext);

    useEffect(() => {
        getBorrowingData();
        console.log(borrowingList)
    }, [updateState]);

    return (
        <>
            <Navbar user={'adm'}/>

            <div className="container">
                <label><h1 style={{ borderBottom:'2px solid #b8bdb5' }}>Lini Masa</h1></label>
                {borrowingList.map(list => (
                    <TimeLineCard key={list._id} borrowingList={list} />
                ))}
            </div>
        </>

    )
}
