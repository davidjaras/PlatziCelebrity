import React, { useState } from 'react'
import lupa from './lupa.svg';

import './Search.scss'

const Search = () => {

    const [searchText, setSearchText] = useState('');

    const askForData = (evt) => {
        const fetchURI = 'https://peoplenews.herokuapp.com/api/scrapper/';

        if (evt.key === 'Enter') {
            console.log('do validate');
        }
    }

    return (
        <div className="search">
            <img className="search__icon" src={lupa} alt="Search Icon" />
            <input className="search__input" type="text" value={searchText} onChange={setSearchText} onKeyDown={askForData} />
        </div>
    )
}

export default Search
