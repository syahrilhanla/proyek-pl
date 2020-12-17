import React, { useContext, useEffect } from 'react';
import { StickyHeadTableADM } from '../../components/StickyHeadTableADM';
import { FormDialogDetails } from '../FormDialogDetails';
import { GlobalContext } from '../globalState/GlobalState';
import { Navbar } from '../Navbar';
import { cardStyle } from '../TimeLineCard';

export const SeeScheduleAdmin = () => {
    const { childStates, borrowingList, getBorrowingData, getLoginInfo } = useContext(GlobalContext);

    // Decide status for FormDialogDetails:
    const styles = cardStyle(borrowingList);

    useEffect(() => {
        getBorrowingData();
        getLoginInfo();        
    }, [childStates.open]);

    return (
        <div style={{opacity: 90}}>
            <Navbar user={'adm'}/>

            <div className="container-schedule">

                {childStates.open && <FormDialogDetails 
                borrowingList={childStates.selectedRow} styles={styles}
                open={childStates.open}/>};                
                <StickyHeadTableADM />
            </div>
        </div>
    )
}

