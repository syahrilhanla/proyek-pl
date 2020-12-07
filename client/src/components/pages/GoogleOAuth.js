import React from 'react';
import GoogleLogin from 'react-google-login';
import './GoogleOAuth.css';

export const GoogleOAuth = () => {
    const responseGoogle = response => {
        console.log(response.profileObj.email);
        console.log(response.profileObj.givenName);
        // console.log(response)

        const emailFormatter = email => {
            const nim = email.slice(0, 13);
            const emailFormatTrue = `${nim}@mhs.ulm.ac.id`;

            return emailFormatTrue === email ? true : false;
        }

        if (emailFormatter(response.profileObj.email) === true) {
            const loginInfo = {
                email: response.profileObj.email,
                name: `${response.profileObj.givenName} ${response.profileObj.familyName}` 
            }
            console.log(loginInfo);
        } else {
            console.log('wrong email');
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
        marginBottom: '2rem'
    }

    return (
        <>
            <GoogleLogin 
                clientId="943373440851-0d888p5eldjd8n17ev5o5cnkbeo1s502.apps.googleusercontent.com"
                buttonText="Masuk"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
                render={renderProps => (
                    <button onClick={renderProps.onClick} style={customStyle}>Masuk</button>
                  )}
            />

        </>
    )
}
