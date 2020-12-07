import React, { useContext, useEffect } from 'react';
import { TimeLineCard } from '../TimeLineCard';
import { GlobalContext } from '../globalState/GlobalState';
import { Navbar } from '../Navbar';
import { ClippedDrawer } from '../ClippedDrawer';
import { PrimarySearchAppBar } from '../PrimarySearchBar';

export const HomeAdmin = () => {

    const { borrowingList, getBorrowingData } = useContext(GlobalContext);

    useEffect(() => {
        getBorrowingData();
    }, []);

    const cardStyle = (list) => {
        if (list === 1) {
            return { title: "Peminjaman Baru", color: "#E46D54", buttonColor: "#CB4335 " };
        } else if (list === 2) {
            return { title: "Disetujui", color: "#91E45B", buttonColor: "#229954 " };
        } else if (list === 3) {
            return { title: "Sedang Proses", color: "#ECF483", buttonColor: "#F1C40F " };
        }
    }
    return (
        <>
            <Navbar user={'adm'}/>

            <div className="container">
                <h1>Lini Masa</h1>
                {borrowingList.map(list => (
                    <TimeLineCard key={list.name} borrowingList={list} cardStyle={cardStyle(list.status)} />
                ))}
            </div>
        </>

    )
}
