import React from 'react';
import { StickyHeadTable } from '../../components/StickyHeadTable';
import { Breadcrumb } from '../Breadcrumb';

const SeeSchedule = () => {
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

export default SeeSchedule;
