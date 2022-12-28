import React from "react";
import navLogo from './images/logo192.png';

export default function Header(){
    return(
      <header>
          <nav className='nav'>
            <img src={navLogo} width='90px' />
            <h3>ReactFacts</h3>
            <h4>React Course - Project 1 </h4>
          </nav>
        </header>
    )
  }
  

