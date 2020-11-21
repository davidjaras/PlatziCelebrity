import React, { Component } from 'react'

import Card from '../components/Card';

class News extends Component {
    
    render(){
        console.log('this.props :>> ', this.props);
        if (!(!!this.props.news)) {
            return (<div>loading</div>)
        } else {
            return(
                <div>
                    {this.props.news.map(card => (
                        card.map(value => (
                                <Card 
                                    key = {value.post_id}
                                    card = {value}
                                />
                            )
                        )
                    ))}
                </div>
            )
        }
    }
}

export default News;