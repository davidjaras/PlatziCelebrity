import React from 'react';
import { useHistory } from 'react-router-dom';
import InicioSesion from '../components/InicioSesion'

import './styles/Auth.scss'

import logo from '../images/logo.svg'
import Register from '../components/Register';

const Auth = () => {
    const history = useHistory();
    const URI = 'https://peoplenews.herokuapp.com/api'

    function handleRegister(body) {
        // console.log({body});

        fetch(`${URI}/register`, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
        })
        .then(response => {
            console.log('response :>> ', response);
            response.json()
        })
        .then(response => {
            console.log('sera?', response)
            sessionStorage.setItem('userSession', response)
            history.push("/home");
        })
        .catch(error => {
            console.log({ error })
            history.push("/");
        })
    }

    function handleLogin(body) {
        // console.log({body});

        fetch(`${URI}/login`, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(response => response.json())
        .then(response => {
            console.log('sera?', response)
            sessionStorage.setItem('userSession', JSON.stringify(response))
            history.push("/home");
        })
        .catch(error => {
            console.log({ error })
            history.push("/");
        })
    }

    return (
        <div className="auth">
            <div className="auth-container">
                <img src={ logo } />
                <p className="auth__parrafo">Estas a punto de descubrir el impresionante mundo de las celebridades</p>
                <div className="reg-login">
                    <div className="register">
                        <Register handleRegister={handleRegister} />
                    </div>
                    <div className="login">
                        <InicioSesion handleLogin={handleLogin} />
                        <a className="auth__parrafo" href="/">¿Olvidó su contraseña?</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth;