import React, { useContext } from 'react';
import { GlobalContext } from '../components/globalState/GlobalState';
import { Button } from './Button';

export const Breadcrumb = () => {
    const { loginInfo } = useContext(GlobalContext);
    console.log(loginInfo);
    return (
        <div className="breadcrumb">
            <span>Welcome, {loginInfo.nama}!</span>
            <Button text="Ajukan Peminjaman" goTo="add-schedule" />
        </div>
    )
}
