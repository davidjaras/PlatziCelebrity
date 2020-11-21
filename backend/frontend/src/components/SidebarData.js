import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import tech from '../images/tech.svg';
import entretainment from '../images/entretainment.svg';
import sport from '../images/sport.svg';
import geopolitic from '../images/geopolitic.svg';


export const SidebarData = [
  {
    title: 'Inicio',
    path: '/home',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Marcadores',
    path: '/marcadores',
    icon: <IoIcons.IoIosStar />,
    cName: 'nav-text'
  },
  {
    title: 'Tecnologia',
    path: '/tecnologia',
    icon: <img src={tech}></img>,
    cName: 'nav-text'
  },
  {
    title: 'Entretenimiento',
    path: '/entretenimiento',
    icon: <img src={entretainment}></img>,
    cName: 'nav-text'
  },
  {
    title: 'Deporte',
    path: '/deporte',
    icon: <img src={sport}></img>,
    cName: 'nav-text'
  },
  {
    title: 'Geopolitica',
    path: '/geopolitica',
    icon: <img src={geopolitic}></img>,
    cName: 'nav-text'
  }
];