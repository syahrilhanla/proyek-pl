import React, { useState, useContext } from 'react';
import { Button } from '../Button';
import './LoginPage.css';
import { GlobalContext } from '../globalState/GlobalState';
import { GoogleOAuth } from './GoogleOAuth';

export const LoginPage = () => {

    // BRING IN GLOBAL CONTEXT
    const { takeLoginInfo } = useContext(GlobalContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        const newLoginInfo = {
            email: email,
            password: password
        }
        takeLoginInfo(newLoginInfo);
    }


    return (
        <div className='login-page-root'>
            <div className='container'>
                <h1 className='login-page'>
                    Masuk dengan Akun ULM
                </h1>
                <form onSubmit={handleSubmit}>
                    <div className='choose-user'>
                        <i className="fas fa-user-circle" />
                        {/* <br />
                        <div className="form-control">
                            <input
                                type="email"
                                placeholder="Email ULM"
                                className="input-normal"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <br />
                        <div className="form-control">
                            <input
                                type="password"
                                placeholder="Password"
                                className="input-normal"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <Button text="Login" goTo="/mhs" onClick={handleSubmit} />
                        <br /> */}
                        <GoogleOAuth />
                    </div>
                </form>
            </div>
        </div>
    )
}
