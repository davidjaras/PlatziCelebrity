import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import tecno from '../images/tecno.svg';
import entretenimiento from '../images/entretenimiento.svg';
import deporte from '../images/deporte.svg';
import geopolitica from '../images/geopolitica.svg';


export const SidebarData = [
  {
    title: 'Inicio',
    path: '/home',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Siguiendo',
    path: '/siguiendo',
    icon: <IoIcons.IoIosStar />,
    cName: 'nav-text'
  },
  {
    title: 'Tecnologia',
    path: '/tecnologia',
    icon: <img src={tecno}></img>,
    cName: 'nav-text'
  },
  {
    title: 'Entretenimiento',
    path: '/entretenimiento',
    icon: <img src={entretenimiento}></img>,
    cName: 'nav-text'
  },
  {
    title: 'Deporte',
    path: '/deporte',
    icon: <img src={deporte}></img>,
    cName: 'nav-text'
  },
  {
    title: 'Geopolitica',
    path: '/geopolitica',
    icon: <img src={geopolitica}></img>,
    cName: 'nav-text'
  }
];