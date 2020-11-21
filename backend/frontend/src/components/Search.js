import React, { useState } from 'react';

import './styles/Search.css'
import icon_search from '../images/icon_search.svg'

const fetchURI = 'https://peoplenews.herokuapp.com/api/scrapper';

const Search = ({ setNews }) => {
    
    const [ busqueda, newBusqueda ] = useState('');

    const search = (e) => {
        if (e.key === 'Enter') {
            fetch(`${fetchURI}/?search=${ busqueda.split(' ').map(char => char.toLowerCase()).join('+') }`)
                .then(respose => respose.json())
                .then(response => {
                    // const resNewsNews = response.flat();
                    // console.log('response back', response.flat())
                    console.log('respose final', response, setNews)
                    setNews(response)
                })
        }
    }

    return (
        <div className= "container__search">
            <button  className="search">
                <img src={icon_search} />
                <input type="search" className="busqueda" value={busqueda} onChange={e => newBusqueda(e.target.value)} onKeyDown={search} />
            </button>
        </div>
    )
}

export default Search;