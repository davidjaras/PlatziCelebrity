import React from 'react';
import Bookmarks from './Bookmarks';

import './styles/ProfilePage.scss'
import Topics from './Topics';

const ProfilePage = () => {
    return (
        <div className="profile container">
            <div className="profile__info">
                <img src="https://spoiler.bolavip.com/__export/1600448317393/sites/bolavip/img/2020/09/18/thor_tony_stark_marvel_telefono_crop1600448316856.jpg_423682103.jpg" alt="User Pic" />
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