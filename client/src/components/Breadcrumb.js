import React, { useContext } from 'react';
import { GlobalContext } from './globalState/GlobalState';
import './Breadcrumb.css';
import { Button } from './Button';

export const Breadcrumb = ({loginInfo}) => {
    // const { loginInfo } = useContext(GlobalContext);
    console.log(loginInfo);

    const checkLoginInfo = () => {
        if (loginInfo.length > 0) {
                return <span><h3>Selamat Datang, {loginInfo[0].name}!</h3></span>
        } else {
                return true
        }
    }
    return (

        <div className="breadcrumb">
            {checkLoginInfo()}
            <Button text="Ajukan Peminjaman" goTo="/mhs/add-schedule" />
        </div>

    )
}
