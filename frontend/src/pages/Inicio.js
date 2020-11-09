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
    let url = 'https://peoplenews.herokuapp.com/api/home/1'

    fetch(url)
      .then(respuesta => {
        return respuesta.json();
      })
      .then(news => {
        console.log(news)
        this.setState({
          news: news
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