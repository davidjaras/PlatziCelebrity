import React, { useState } from 'react';
import './styles/card.css';
import iconShare from  '../images/compartir.svg'
import iconMarker from  '../images/marcadores.svg'
import iconFav from  '../images/favoritos.svg'

function Card(props) {
    console.log('card props', props)

    const { title, content, source, date_ } = props.card;
    const[category,setCategory] = useState('Mi Categoría');
    
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
                    <img src={ iconFav }></img>
                </figure>
            </div>
        </div>
    )
}

export default Card;
