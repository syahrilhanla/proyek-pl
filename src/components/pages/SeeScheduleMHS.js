import React from 'react';
import { StickyHeadTable } from '../StickyHeadTable';
import { Breadcrumb } from '../Breadcrumb';

export const SeeScheduleMHS = () => {
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

