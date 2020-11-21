import React, { useEffect, useState } from 'react'
import './styles/Celebrities.scss';
import CelebrityContainer from '../components/CelebrityContainer';
import ShowMore from '../components/ShowMore';
import CelebritiesMock from '../mockData/celebrities.json';

import { useHistory } from 'react-router-dom';

const Celebrities = () => {

    const history = useHistory();

    const [ news, setNews ] = useState([])

    useEffect(() => {
        consultNews();
        const userSession = JSON.parse(sessionStorage.getItem('userSession'))
        if (!userSession) {
          history.push('/')
        }
      }, [])
    
      const consultNews = () => {
        let url = 'https://peoplenews.herokuapp.com/api/profile/celebrities'
    
        fetch(url, {
          method: 'POST',
          body: JSON.stringify({ id: 20 }),
          headers: {
              'Content-Type': 'application/json'
          },
        })
        .then(respuesta => {
          return respuesta.json();
        })
        .then(response => {
          console.log(response.nameCelebrity.flat())
          setNews(response)
        })
      }


    return (
        <div className="celebrities">
            <h1 className="celebrities__title">Celebridades</h1>
            <div className="celebrities__content">
                {CelebritiesMock.map((item, index) => {
                    return (
                        <CelebrityContainer
                            key={ index }
                            urlImage={item.urlImage}
                            name={item.name}
                            buttonType={item.buttonType}
                            buttonContent={item.buttonContent} />
                    )
                })}
            </div>
            <ShowMore more="Celebridades" />
        </div>
    )
}

export default Celebrities
