import React from 'react';
import News from '../components/News';
import TitleNews from '../components/TitleNews';

class Inicio extends React.Component {

  state = {
    news : []
  }

  componentDidMount() {
    this.consultNews();
  }

  consultNews = () => {
    let url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=c97cb1520b4646388cd7bd70b1d87eca'

    fetch(url)
      .then(respuesta => {
        return respuesta.json();
      })
      .then(news => {
        console.log(news)
        this.setState({
          news: news.articles
        })
      })
  }

  render() {
    return (
      <div className='inicio'>
        <TitleNews />
        <News 
          news={this.state.news}
        />
      </div>
    ); 
  }
}
  

export default Inicio;