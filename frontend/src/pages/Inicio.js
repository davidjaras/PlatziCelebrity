import React from 'react';
import News from '../components/News';
import TitleNews from '../components/TitleNews';

class Inicio extends React.Component {

  state = {
    news : []
  }

  constructor() {
    super();
    this.consultNews();
  }

  consultNews = () => {
    let url = 'https://peoplenews.herokuapp.com/api/home'

    fetch(url, {
      method: 'POST',
      body: JSON.stringify({ id: 52 }),
      headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
    .then(respuesta => {
      return respuesta.json();
    })
    .then(news => {
      console.log('news', news)
      this.setState({
        news
      })
    })
  }

  render() {
    console.log('this.state :>> ', this.state);
    return (
      <div className='inicio'>
        <TitleNews />
        <News 
          news={this.state.news.post}
        />
      </div>
    ); 
  }
}
  

export default Inicio;
