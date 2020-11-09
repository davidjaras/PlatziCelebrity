import React from 'react';
import { useHistory } from 'react-router-dom';

import InicioSesion from '../components/GuideComponent/InicioSesion'

import './styles/Auth.scss'

import logo from '../assets/images/logobl.png'
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
                <div className="reg-login">
                    <div className="register">
                        <Register className="register" handleRegister={handleRegister} />
                    </div>
                    <div className="login">
                        <InicioSesion className="login" handleLogin={handleLogin} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth;