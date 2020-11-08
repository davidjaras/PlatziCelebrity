import React, { Component } from 'react'

import Card from '../components/Card';

class News extends Component {
    render(){
        return(
            <div>
                {this.props.news.map(card => (
                    <Card 
                        key = {card.url}
                        card = {card}
                    />
                ))}
            </div>
        )
    }
}

export default News;