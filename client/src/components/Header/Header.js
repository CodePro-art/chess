import React from 'react';
import './Header.css';
import Logo from '../../images/logo-b.png';
import Login from '../Login/Login';

export default function Header() {
  return (
    <header className="header">
      <a href="/">
        <img className="logo" src={Logo} alt="Wizard Chess online logo"/>
      </a>
      <div className="spacer"></div>
      <div className="header-menu">
        <a href="/rules" className="menu-item-rules">Rules</a>
        <a href="/" className="menu-item-home">Home</a>
        <a href="/play" className="menu-item-play button vivid">PLAY</a>
      </div>
      <Login/>
    </header>
  )
}