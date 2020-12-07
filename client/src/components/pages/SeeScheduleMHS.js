import React from 'react';
import { StickyHeadTable } from '../StickyHeadTable';
import { Breadcrumb } from '../Breadcrumb';
import { Navbar } from '../Navbar';

export const SeeScheduleMHS = () => {
    return (
        <>
            <Navbar user={'mhs'}/>
            <div className="container">
                <Breadcrumb />
            </div>
            <div className="container-schedule">
                <StickyHeadTable />
            </div>
        </>
    )
}

