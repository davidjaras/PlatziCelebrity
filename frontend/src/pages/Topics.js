import React, { useState } from 'react';
import Bookmarks from './Bookmarks';

import './styles/Topics.scss'

import TopicsMock from '../mockData/topic.json';
import TopicContainer from '../components/TopicContainer';

const Topics = ({ categories }) => {

    const normalCategories = ['entretainment', 'sport', 'geopolitic', 'tech']

    const changeName = (item) => {
        switch (item) {
            case 'entretainment':
                return 'Entretenimiento'
            case 'sport':
                return 'Deportes';
            case 'geopolitic':
                return 'Geopolitica';
            case 'tech':
                return 'Tecnologia';
            default:
                return ''
        }
    }

    const convertCategory = (item) => {
        switch (item) {
            case 'entretainment':
                return 1
            case 'sport':
                return 2;
            case 'geopolitic':
                return 3;
            case 'tech':
                return 4;
            default:
                return ''
        }
    }


    const changeCategory = (item) => {
        console.log({item});
        let url = 'https://peoplenews.herokuapp.com/api/profile'

        fetch(`${url}/category/${categories.includes(item) ? 'delete' : 'post'}`, {
            method: categories.includes(item) ? 'DELETE' : 'POST',
            body: JSON.stringify({ id:JSON.parse(sessionStorage.getItem('userSession')).iD, category: convertCategory(item)  }),
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(respuesta => {
            return respuesta.json();
        })
        .then(response => {
            console.log('respose change', response)
            if(!categories.includes(item)) {
                categories = [...categories, item];
            } else {
                categories = categories.filter(cat => cat !== item)
            }
        })
    }

    return (
        <div className="topics">
            <div>
                 <h1 className="topics__title">Temas</h1>
            </div>
            <div className="topics__content">
                {normalCategories.map((item, index) => {
                    const icon = require(`../images/${item}.svg`).default
                    if (!(!!categories)) {
                        return (
                            <span>Nothing</span>
                        )
                    } else {
                        return (
                            <div onClick={e => changeCategory(item)}>
                            <TopicContainer
                                key={index}
                                topicIcon={ icon }
                                topicName={ changeName(item )}
                                isActive={ categories.includes(item) } />
                            </div>
                        )
                    }
                })}
            </div>
        </div>
    )
}

export default Topics;