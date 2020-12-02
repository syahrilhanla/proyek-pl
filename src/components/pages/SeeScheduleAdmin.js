import React from 'react';
import { StickyHeadTable } from '../StickyHeadTable';
import { Breadcrumb } from '../Breadcrumb';

export const SeeScheduleAdmin = () => {
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

