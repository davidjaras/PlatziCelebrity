import React, { useEffect, useState }  from 'react'
import Bookmarks from './Bookmarks';

import './styles/ProfilePage.scss'
import Topics from './Topics';

import Menu from '../components/Menu'

import { useHistory } from 'react-router-dom';

const ProfilePage = () => {
    
    const [ state, setState ] = useState({dataUser:[{first_name: 'hola', email:'prueba'}]})

    const history = useHistory();

    useEffect(() => {
        consultNews();
        const userSession = JSON.parse(sessionStorage.getItem('userSession'))
        if (!userSession) {
          history.push('/')
        }
      }, [])
    
      const consultNews = async () => {
        let url = 'https://peoplenews.herokuapp.com/api/profile'
    
       await fetch(url, {
          method: 'POST',
          body: JSON.stringify({ id:JSON.parse(sessionStorage.getItem('userSession')).iD  }),
          headers: {
              'Content-Type': 'application/json'
          },
        })
        .then(respuesta => {
          return respuesta.json();
        })
        .then(response => {
          console.log('usuario', response)
          setState(response)
        })
      }

    return (
      <>
        <Menu />
        <div className="profile container">
            <div className="profile__info">
                <img src="https://s.gravatar.com/avatar/2820b257689e2df23580a62d570c7be9?s=80" alt="User Pic" />
                <h1>{state.dataUser[0].first_name}</h1>
                <p>Fotografo apasionado por la tecnología y el deporte</p>
                <a href="#">{state.dataUser[0].email}</a>
            </div>
            <h2 className="profile__summary">RESUMEN</h2>
            <hr className="profile__divider" />
            <Topics categories={state.nameCategory} />
            <Bookmarks />
        </div>
      </>
    )
}

export default ProfilePage;