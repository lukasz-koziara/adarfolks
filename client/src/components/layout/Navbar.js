import logo from '../../img/logo-small-white.svg'
import logoHover from '../../img/logo-small-red.svg'
import React, { useState } from 'react';

export const Navbar = () => {
    const [hover, setHover] = useState(false);

    const onImageHover = () => {
    
        setHover(!hover)
    }

    return (
        <nav className="navbar bg-dark">
        <h1>
          <a href="index.html"><img src = { hover ? logoHover : logo } className = 'adar-logo' onMouseOver={ onImageHover } onMouseOut={onImageHover} alt="Adar"
 
          />
          </a>
        </h1>
        <ul>
          <li><a href="profiles.html">People</a></li>
          <li><a href="register.html">Register</a></li>
          <li><a href="login.html">Login</a></li>
        </ul>
      </nav>
    )


}
