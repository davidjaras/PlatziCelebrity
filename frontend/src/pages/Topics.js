import React from 'react';
import Bookmarks from './Bookmarks';

import './styles/Topics.scss'

import TopicsMock from '../mockData/topic.json';
import TopicContainer from '../components/TopicContainer';

const Topics = () => {
    return (
        <div className="topics">
            <div>
                 <h1 className="topics__title">Temas</h1>
            </div>
            <div className="topics__content">
                {TopicsMock.map((item, index) => {
                    const icon = require(`../images/${item.topicIcon}.svg`).default
                    return (
                        <TopicContainer
                            topicIcon={ icon }
                            topicName={item.topicName}
                            isActive={item.isActive} />
                    )
                })}
            </div>
        </div>
    )
}

export default Topics;