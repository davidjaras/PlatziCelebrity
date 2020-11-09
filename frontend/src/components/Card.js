import React, { useState } from 'react';
import './styles/card.css';
import iconShare from  '../images/compartir.svg'
import iconMarker from  '../images/marcadores.svg'
import iconFav from  '../images/favoritos.svg'

function Card(props) {
    console.log(props)

    const { title, description, author, publishedAt } = props.card;
    const[category,setCategory] = useState('Mi Categoría');
    
    return (
        <div className="card">
            <div className="card__info">
                <h2> { title } </h2>
                <p> { description } </p>
                <p className="card__info-source"> { author } • { publishedAt } </p>
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
