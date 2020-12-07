import React, { useContext } from 'react';
import { GlobalContext } from './globalState/GlobalState';
import './Breadcrumb.css';
import { Button } from './Button';

export const Breadcrumb = () => {
    const { loginInfo } = useContext(GlobalContext);
    const name = loginInfo.map(item => item.name)
    return (

        <div className="breadcrumb">
            <span><h3>Selamat Datang, {name}!</h3></span>
            <Button text="Ajukan Peminjaman" goTo="/mhs/add-schedule" />
        </div>

    )
}
