import React from 'react'
import Bookmarks from './Bookmarks'
import Celebrities from './Celebrities'

const FollowingPage = () => {
    return (
        <div className="container">
            <Celebrities />
            <Bookmarks />
        </div>
    )
}

export default FollowingPage
