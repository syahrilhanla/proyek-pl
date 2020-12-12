import React, { useContext, useEffect, useState } from 'react';
import { TimeLineCard } from '../TimeLineCard';
import { GlobalContext } from '../globalState/GlobalState';
import { Navbar } from '../Navbar';

export const HomeWD2 = () => {

    const { borrowingList, getBorrowingData, updateState } = useContext(GlobalContext);
    const [invisible, setInvisible] = useState(true);

    useEffect(() => {
        getBorrowingData();
        console.log(borrowingList);
        setInvisible(false);
    }, [updateState]);

    return (
        <>
            <Navbar user={'adm'} invisible={invisible} setInvisible={setInvisible} />

            <div className="container">
                <label><h1 style={{ borderBottom:'2px solid #b8bdb5' }}>Lini Masa</h1></label>
                {borrowingList.filter(list => list.status === 2)
                    .map(list => (
                        <TimeLineCard key={list._id} borrowingList={list} />
                    ))}
            </div>
        </>

    )
}
