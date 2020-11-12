import React from 'react'
import BookmarkContainer from '../components/BookmarkContainer'

import './styles/Bookmarks.scss'

import BookmarksMock from '../mockData/bookmarks.json'

const Bookmarks = () => {
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
