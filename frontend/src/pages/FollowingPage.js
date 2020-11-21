import React, { useEffect, useState }  from 'react'
import Bookmarks from './Bookmarks'

import './styles/FollowingPage.scss'

import Menu from '../components/Menu'

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
        <>
            <Menu />
            <div className="container">
                <div className="switcher">      
                <span className={`switcher__bookmarks ${switcher === 'bookmarks' ? 'active' : ''}`} onClick={(evt) => switchTab(evt, 'bookmarks')}>Marcadores</span>
                </div>
                {
                    <div className="container">
                        <Bookmarks />
                    </div>
                }
            </div>
        </>
    )
}

export default FollowingPage
