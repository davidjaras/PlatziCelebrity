import React, { useEffect, useState }  from 'react'
import Bookmarks from './Bookmarks';

import './styles/ProfilePage.scss'
import Topics from './Topics';

import { useHistory } from 'react-router-dom';

const ProfilePage = () => {
    
    const history = useHistory();

    useEffect(() => {
        const userSession = JSON.parse(sessionStorage.getItem('userSession'))
        if (!userSession) {
            history.push('/')
        }
    }, [])

    return (
        <div className="profile container">
            <div className="profile__info">
                <img src="https://s.gravatar.com/avatar/2820b257689e2df23580a62d570c7be9?s=80" alt="User Pic" />
                <h1>Juanita de Arco</h1>
                <p>Fotográfa apasionada por la tecnología y el deporte</p>
                <a href="#">juanita@dearco.com</a>
            </div>
            <h2 className="profile__summary">RESUMEN</h2>
            <hr className="profile__divider" />
            <Topics />
            <Bookmarks />
        </div>
    )
}

export default ProfilePage;