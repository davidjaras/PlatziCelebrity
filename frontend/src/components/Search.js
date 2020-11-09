import React from 'react';

import './styles/Search.css'

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
            <div className="search">
                <input type="shearch" className="busqueda" value={this.state.busqueda} onChange={this.onChange} />
            </div>
            )
    }
}

export default Search;