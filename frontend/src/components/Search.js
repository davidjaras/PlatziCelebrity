import React from 'react';

import './styles/Search.css'
import icon_search from '../images/icon_search.svg'

class Search extends React.Component {
    state={
        busqueda: ''

    }

    onChange=async e=>{
        e.persist();
        await this.setState({busqueda: e.target.value})
        console.log(this.state.busqueda);
    }

    render () {
        return (
            <div className= "container__search">
                <button  className="search">
                      <img src={icon_search} />
                    <input type="search" className="busqueda" value={this.state.busqueda} onChange={this.onChange} />
                </button>
            </div>
            )
    }
}

export default Search;