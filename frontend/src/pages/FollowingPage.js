import React, { useEffect, useState }  from 'react'
import Bookmarks from './Bookmarks'
import Celebrities from './Celebrities'

import './styles/FollowingPage.scss'

import { useHistory } from 'react-router-dom';

const FollowingPage = () => {

    const history = useHistory();
    const [switcher, setSwitcher] = useState('celebrities');

    useEffect(() => {
        const userSession = JSON.parse(sessionStorage.getItem('userSession'))
        if (!userSession) {
            history.push('/')
        }
    }, [])

    function switchTab(evt, selected) {
        evt.preventDefault();
        setSwitcher(selected);
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
