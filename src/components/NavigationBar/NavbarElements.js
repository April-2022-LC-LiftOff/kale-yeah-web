import React from 'react'
import * as FaIcons from 'react-icons/fa';

import * as AiIcons from 'react-icons/ai';

import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import {useState} from 'react';

import './Navbar.css' 

function NavbarElements() {

  const [sidebar, setSidebar] = useState(false);

  const showSideBar =  () => setSidebar(!sidebar) 

  
  return (
    <div className='topmost'>
      <div className='navbar'>
        {/* <Link to= "#" className='menu-bars'>
          <FaIcons.FaBars onClick={showSideBar}  />
        </Link> */}
      </div>
      <nav className={sidebar ?  'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items'>
          {/* <li className='navbar-toggle'>
            <Link to="#" className='menu-bars'>
            <AiIcons.AiOutlineClose/>
            </Link>
          </li> */}
          {SidebarData.map((item, index) => {
            return (
              <li key = {index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>

    </div>
  )
}

export default NavbarElements
