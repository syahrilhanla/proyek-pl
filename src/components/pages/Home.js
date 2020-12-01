import React, { useContext } from 'react';
import { GlobalContext } from '../globalState/GlobalState';
import { Breadcrumb } from '../Breadcrumb';
import { StickyHeadTable } from '../../components/StickyHeadTable';

const Home = () => {
    const { borrowingList } = useContext(GlobalContext);
    console.log(borrowingList);
    return (
        <>
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
