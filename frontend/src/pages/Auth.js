import React from 'react';
import { useHistory } from 'react-router-dom';
import InicioSesion from '../components/InicioSesion'

import './styles/Auth.scss'

import logo from '../images/logo.svg'
import Register from '../components/Register';

const Auth = () => {
    const history = useHistory();

    function handleRegister(body) {
        // console.log({body});

        fetch('https://peoplenews.herokuapp.com/register', {
            method: 'POST',
            body
        })
        .then(response => response.json())
        .then(response => {
            console.log('sera?', response)
            history.push("/");
        })
        .catch(error => {
            console.log({ error })
            history.push("/auth");
        })
    }

    function handleLogin(body) {
        // console.log({body});

        fetch('https://peoplenews.herokuapp.com/login', {
            method: 'POST',
            body
        })
        .then(response => response.json())
        .then(response => {
            console.log('sera?', response)
            history.push("/");
        })
        .catch(error => {
            console.log({ error })
            history.push("/auth");
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