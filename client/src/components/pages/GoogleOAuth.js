import React, {useState, useEffect, useContext } from 'react';
import GoogleLogin from 'react-google-login';
import { Link, useHistory } from 'react-router-dom';
import { GlobalContext } from '../globalState/GlobalState';

const GoogleOAuth = () => {  
    const clientId = "943373440851-0d888p5eldjd8n17ev5o5cnkbeo1s502.apps.googleusercontent.com";

    const history = useHistory();
    const [loginData, setLoginData] = useState({});
    const { takeLoginInfo } = useContext(GlobalContext);

    // Checks if the email is ULM email 
    const emailFormatter = email => {
        const nim = email.slice(0, 13);
        const emailFormatTrue = `${nim}@mhs.ulm.ac.id`;

        return emailFormatTrue === email ? true : false;
    }


    const responseGoogle = response => {

        const name = response.profileObj.givenName;
        const email = response.profileObj.email;
        const nim = email.slice(0,13);
        // console.log(response)

        const insertLoginData = (name, email, nim) => {
            return {
                email: email,
                name: name,
                nim: nim
            }
        }

        // If ULM emails then returns link to MHS page, if not then returns to ADM
        if (emailFormatter(response.profileObj.email) === true) {
            const newLoginData = insertLoginData(name, email, nim);
            takeLoginInfo(newLoginData);
            console.log(newLoginData);
            history.push('/mhs');
        } else if (email === 'kaipajuang@gmail.com') {
            const newLoginData = insertLoginData(name, email);
            setLoginData(newLoginData);
            history.push('/wd-2');
        } else {
            const newLoginData = insertLoginData(name, email);
            setLoginData(newLoginData);
            history.push('/adm');
        }
    }

    const customStyle = {
        padding: '8px 20px',
        borderRadius: '4px',
        outline: 'none',
        border: 'none',
        fontSize: '18px',
        color: 'white',
        cursor: 'pointer',
        backgroundColor: '#1888ff',
        marginBottom: '2rem',
        textDecoration: 'none'
    }

    return (
        <>
            <GoogleLogin 
                clientId={clientId}
                buttonText="Masuk"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
                render={renderProps => (
                    <Link onClick={renderProps.onClick} 
                        style={customStyle}
                        to={''}
                    >
                        Masuk
                    </Link>
                  )}
            />

        </>
    )
}

export default GoogleOAuth;