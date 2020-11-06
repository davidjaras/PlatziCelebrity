import React from 'react';

import './styles/TopicContainer.scss';
function TopicContainer ({ topicIcon, topicName, isActive }) {
    return (
        <div className={`topic-container ${isActive ? 'isActive' : 'isDisabled'}`}>
            <img className="topic-container__icon" src={ topicIcon } alt="Topic Pic" />
            <span>{ topicName }</span>
        </div>
    )
}

export default TopicContainer;