import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../globalState/GlobalState';
import { Breadcrumb } from '../Breadcrumb';
import { StickyHeadTable } from '../StickyHeadTable';
import { Navbar } from '../Navbar';

const Home = () => {

    const { borrowingList, getBorrowingData } = useContext(GlobalContext);

    // UseEffect 
    useEffect(() => {
        getBorrowingData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <Navbar />
            <div className="container">
                <Breadcrumb />
            </div>

            <div className="container-schedule">
                <StickyHeadTable />
            </div>
        </>
    )
}
export default Home
