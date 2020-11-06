import React, { useState }  from 'react'
import Bookmarks from './Bookmarks'
import Celebrities from './Celebrities'

import './styles/FollowingPage.scss'

const FollowingPage = () => {

    // let switcher = 'bookmarks';
    const [switcher, setSwitcher] = useState('celebrities');

    function switchTab(evt, selected) {
        evt.preventDefault();
        setSwitcher(selected);
        console.log('epa', selected, switcher)
    }

    return (
        <div className="container">
            <div className="switcher">
                <span className={`switcher__celebrities ${switcher === 'celebrities' ? 'active' : ''}`} onClick={(evt) => switchTab(evt, 'celebrities')}>Celebridades</span>
                <span className={`switcher__bookmarks ${switcher === 'bookmarks' ? 'active' : ''}`} onClick={(evt) => switchTab(evt, 'bookmarks')}>Marcadores</span>
            </div>
            {
                switcher === 'celebrities'
                    ?
                    <div className="container">
                        <Celebrities />
                    </div>
                    :
                    <div className="container">
                        <Bookmarks />
                    </div>
            }
        </div>
    )
}

export default FollowingPage
