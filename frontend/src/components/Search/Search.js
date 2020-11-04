import React from 'react'
import lupa from './lupa.svg';

import './Search.scss'

const Search = () => {

    function handleChange(evt) {
        console.log(evt.target.value)
    }

    return (
        <div className="search">
            <img className="search__icon" src={lupa} alt="Search Icon" />
            <input className="search__input" type="text" onChange={handleChange} />
        </div>
    )
}

export default Search
