import React from 'react';

import './styles/BookmarkContainer.scss'

function BookmarkContainer({ sourceName, postImage, postName, postTime }) {

    const newsDate = new Date(postTime)

    return (
        <div className="bookmark-container">
            <div className="bookmark-container__content">
                <h2 className="bookmark-container__title">{ postName }</h2>
                <a href={sourceName} target="_blank">Ir al enlace</a>
                {/* <img src={ postImage } className="bookmark-container__image" alt="Source icon" /> */}
            </div>
            <div className="bookmark-container__metadata">
                <span>El { newsDate.toLocaleDateString() }</span>
            </div>
        </div>
    )
}

export default BookmarkContainer;