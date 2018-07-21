import React from 'react';
import {Link} from 'react-router-dom';

export default ({children}) => (
  <div className="flex-container">
    <nav>
      <Link to="/" >Home</Link>
      <Link to="/about">About</Link>
    </nav>
    <div className="container">
      {children}
    </div>
    <hr/>
    <footer>
      <span><b>Ahihi</b></span>
    </footer>
  </div>
);