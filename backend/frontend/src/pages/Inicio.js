import React, { useEffect, useState } from 'react';
import News from '../components/News';
import TitleNews from '../components/TitleNews';
import Menu from '../components/Menu'

import { useHistory } from 'react-router-dom';

const Inicio = () => {

  const history = useHistory();

  const [ news, setNews ] = useState([])

  useEffect(() => {
    consultNews();
    const userSession = JSON.parse(sessionStorage.getItem('userSession'))
    if (!userSession) {
      history.push('/')
    }
  }, [])

  const consultNews = () => {
    let url = 'https://peoplenews.herokuapp.com/api/home'

    fetch(url, {
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
      console.log('respose inicial', response, setNews)
      setNews(response)
    })
  }

  return(
    <>
      <Menu setNews={setNews} />
      <div className='inicio'>
        <TitleNews />
        <News 
          news={news.post}
        />
      </div>
    </>
  )
}

export default Inicio;
