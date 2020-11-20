import React, { Component } from 'react'

import Card from '../components/Card';

// TODO:
// Use Class or functions

class News extends Component {
    render(){
        return(
            <div>
                {this.props.news.map(card => (
                    card.map (value => (
                        <Card
                        key = {value.url}
                        card = {value}
                        />
                    ))
                ))}
            </div>
        )
    }
}

export default News;