import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../globalState/GlobalState';
import { Breadcrumb } from '../Breadcrumb';
import { StickyHeadTable } from '../StickyHeadTable';
import { Navbar } from '../Navbar';

const Home = () => {

    const { loginInfo, getBorrowingData } = useContext(GlobalContext);

    // UseEffect 
    useEffect(() => {
        getBorrowingData();
        console.log(loginInfo)
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
