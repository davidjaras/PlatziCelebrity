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

   consultNews = async () => {
    let url = ''

    await fetch(url)
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
