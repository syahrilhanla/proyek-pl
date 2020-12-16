import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../globalState/GlobalState';
import { Breadcrumb } from '../Breadcrumb';
import { StickyHeadTable } from '../StickyHeadTable';
import { Navbar } from '../Navbar';

const Home = () => {

    const { getBorrowingData, loginInfo } = useContext(GlobalContext);

    // UseEffect 
    useEffect(() => {
        getBorrowingData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <Navbar user={'mhs'}/>
            <div className="container">
                <Breadcrumb loginInfo={loginInfo}/>
            </div>

            <div className="container-schedule">
                <StickyHeadTable />
            </div>
        </>
    )
}
export default Home
