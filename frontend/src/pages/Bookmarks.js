import React, { useEffect, useState } from 'react'
import BookmarkContainer from '../components/BookmarkContainer'

import Menu from '../components/Menu'

import { useHistory } from 'react-router-dom';

import './styles/Bookmarks.scss'


const Bookmarks = () => {

    const URI = 'https://peoplenews.herokuapp.com/api/profile/bookmarks';
    
    const history = useHistory();

    const [ bookmarks, setBookmarks ] = useState([])

    useEffect(() => {
        getBookmarks()
        const userSession = JSON.parse(sessionStorage.getItem('userSession'))
        if (!userSession) {
            history.push('/')
        }
    }, [])

    const getBookmarks = () => {
    
        fetch(URI, {
          method: 'POST',
          body: JSON.stringify({ id:JSON.parse(sessionStorage.getItem('userSession')).iD }),
          headers: {
              'Content-Type': 'application/json'
          },
        })
        .then(respuesta => {
          return respuesta.json();
        })
        .then(response => {
          const flatBookmarks = response.dataBookMarkets.flat()
          setBookmarks(flatBookmarks)
        })
      }

    return (
      <div className="bookmarks">
          <div>
            <h1 className="bookmarks__title">Marcadores</h1>
          </div>
          <div className="bookmarks__content">
              {bookmarks.map((item, index) => {
                  return (
                      <BookmarkContainer
                        key={index}
                        sourceName={item.source}
                        postName={item.title}
                        postImage={item.image}
                        postTime={item.date_} />
                  )
              })}
          </div>
      </div>
    )
}

export default Bookmarks
