import React, { useEffect } from 'react'
import BookmarkContainer from '../components/BookmarkContainer'

import { useHistory } from 'react-router-dom';

import './styles/Bookmarks.scss'

import BookmarksMock from '../mockData/bookmarks.json'

const Bookmarks = () => {
    
    const history = useHistory();

    useEffect(() => {
        const userSession = JSON.parse(sessionStorage.getItem('userSession'))
        if (!userSession) {
            history.push('/')
        }
    }, [])

    return (
        <div className="bookmarks">
            <div>
              <h1 className="bookmarks__title">Marcadores</h1>
            </div>
            <div className="bookmarks__content">
                {BookmarksMock.map((item, index) => {
                    return (
                        <BookmarkContainer
                            key={index}
                            sourceIcon={item.sourceIcon}
                            sourceName={item.sourceName}
                            postName={item.postName}
                            postImage={item.postImage}
                            postTime={item.postTime} />
                    )
                })}
            </div>
        </div>
    )
}

export default Bookmarks
