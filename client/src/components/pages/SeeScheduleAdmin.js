import React from 'react';
import { StickyHeadTableADM } from '../../components/StickyHeadTableADM';
import { Navbar } from '../Navbar';

export const SeeScheduleAdmin = () => {
    return (
        <>
            <Navbar user={'adm'}/>
            <div className="container-schedule">
                <StickyHeadTableADM />
            </div>
        </>
    )
}

