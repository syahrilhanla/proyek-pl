import React, { useContext } from 'react';
import { TimeLineCard } from '../../components/TimeLineCard';
import { GlobalContext } from '../../components/globalState/GlobalState';

export const HomeAdmin = () => {
    const { borrowingList } = useContext(GlobalContext);

    const backupColor = "#E7E8E4";

    const cardStyle = (list) => {
        if (list === 'new-borrowing') {
            return { title: "Peminjaman Baru", color: "#E46D54", buttonColor: "#CB4335 " };
        } else if (list === 'approved') {
            return { title: "Disetujui", color: "#91E45B", buttonColor: "#229954 " };
        } else if (list === 'waiting-verification') {
            return { title: "Sedang Proses", color: "#ECF483", buttonColor: "#F1C40F " };
        }
    }
    return (
        <div className="container">
            <h1>Lini Masa</h1>
            {borrowingList.map(list => (
                <TimeLineCard key={list.name} borrowingList={list} cardStyle={cardStyle(list.status)} />
            ))}
        </div>
    )
}
