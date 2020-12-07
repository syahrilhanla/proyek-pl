import React, { useContext } from 'react';
import { GlobalContext } from './globalState/GlobalState';
import './Breadcrumb.css';
import { Button } from './Button';

export const Breadcrumb = () => {
    const { loginInfo } = useContext(GlobalContext);

    return (

        <div className="breadcrumb">
            <span><h3>Selamat Datang, {loginInfo[0].name}!</h3></span>
            <Button text="Ajukan Peminjaman" goTo="/mhs/add-schedule" />
        </div>

    )
}
