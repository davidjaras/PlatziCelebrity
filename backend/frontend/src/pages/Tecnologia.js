import React from 'react';
import {useState,useEffect} from 'react';
import News from '../components/News';
import Menu from '../components/Menu'

import { useHistory } from 'react-router-dom';

function Tecnologia() {
  const history = useHistory();

  const [state,setState]= useState({news:[]})
  useEffect(()=>{
    consultNews()
    const userSession = JSON.parse(sessionStorage.getItem('userSession'))
      if (!userSession) {
          history.push('/')
      }
  }, []);

  let consultNews = async () => {
    let url = 'https://peoplenews.herokuapp.com/api/home/category';


    await fetch(url, {
      method: 'POST',
      body: JSON.stringify({ category : 4 }),
      headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
    .then(respuesta => {
      return respuesta.json();
    })
    .then(news => {
      console.dir( news)
      setState(news)

    })
  }
    
  return (
    <>
      <Menu />
      <div className='inicio'>
      <News 
        news={state.post}
      />
    </div>
    </>
  );
}

export default Tecnologia;