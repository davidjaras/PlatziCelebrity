import React, { useState, useEffect} from 'react';
import './styles/card.css';
import iconShare from  '../images/compartir.svg'
import iconMarker from  '../images/marcadores.svg'
import iconFav from  '../images/favoritos.svg'
import Bookmarks from '../pages/Bookmarks';

function Card(props) {

    const { title, content, source, date_ } = props.card;
    const[category,setCategory] = useState('Mi Categoría');
    
    const saveBookmark = () => {
      let url = 'https://peoplenews.herokuapp.com/api/home/bookmarks'
  
      fetch(url, {
        method: 'POST',
        body: JSON.stringify({ id:JSON.parse(sessionStorage.getItem('userSession')).iD, post_id: props.card.post_id }),
        headers: {
            'Content-Type': 'application/json'
        },
      })
      .then(respuesta => {
        return respuesta.json();
      })
      .then(response => {
        console.log('bookmarks', response)
      })
    }
    
    return (
        <div className="card">
            <div className="card__info">
                <h2> { title } </h2>
                <p> { content } </p>
                <p className="card__info-source"> { source } • { date_ } </p>
            </div>
            <div className="card__info-icon">
                <p> { category } </p>
                <figure>
                    <img src={ iconShare }></img>
                    <img src={ iconMarker }></img>
                    <img src={ iconFav } onClick={saveBookmark} ></img>
                </figure>
            </div>
        </div>
    )
}

export default Card;
