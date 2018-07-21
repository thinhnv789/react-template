import React from 'react';
import { devices } from './../../helpers/common';
import HeaderDesktop from '../../components/Header/Desktop';
import HeaderMobile from '../../components/Header/Mobile';

const navItems = [
  {
    link: '/',
    name: 'Home'
  },
  {
    link: '/about',
    name: 'About'
  }
];

export default ({children}) => (
  <div className="wrapper">
    {
      (window.device === devices.MOBILE) ? <HeaderMobile navItems={navItems}/> : <HeaderDesktop navItems={navItems}/>
    }
    <div className="main">
      {children}
    </div>
    <hr/>
    <footer>
      <span><b>Ahihi</b></span>
    </footer>
  </div>
);