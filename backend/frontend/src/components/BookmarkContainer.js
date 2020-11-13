import React from 'react';

import './styles/BookmarkContainer.scss'

function BookmarkContainer({ sourceName, postImage, postName, postTime }) {
    return (
        <div className="bookmark-container">
            <div className="bookmark-container__source">
                <span>{ sourceName }</span>
            </div>
            <div className="bookmark-container__content">
                <h2 className="bookmark-container__title">{ postName }</h2>
                {/* <img src={ postImage } className="bookmark-container__image" alt="Source icon" /> */}
            </div>
            <div className="bookmark-container__metadata">
                <span>Hace { postTime }</span>
            </div>
        </div>
    )
}

export default BookmarkContainer;