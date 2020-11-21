import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './styles/Menu.css';
import { IconContext } from 'react-icons';
import peopleLogo from '../images/logo.svg';
import Search from './Search';

function Navbar({ setNews }) {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    
      <IconContext.Provider value={{ color: '#AFB0C0' }}>
        <div className='navbar'>
          <div className="nav-start">
            <Link to='#' className='menu-bars'>
              <FaIcons.FaBars onClick={showSidebar} />
            </Link>
            <Link to='/home'>
              <img className="logo" src={peopleLogo}></img>
            </Link>
          </div>
          <Search setNews={setNews} />
          <div className="perfil-link">

            <img
              className="avatar"
              src="https://s.gravatar.com/avatar/2820b257689e2df23580a62d570c7be9?s=80"
              alt="Avatar"
            />

            <p className="perfil-text">
              <Link to="/profile">Mi Perfil</Link>
            </p>
          </div>

        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    
  );
}

export default Navbar;