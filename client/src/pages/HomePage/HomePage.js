import React from 'react';
import './HomePage.css';
import Video from '../../components/Video/Video';
import clouds from '../../videos/Harry potter intro without text.mp4';
import Logo from '../../images/logo-w.png';
import Button from '../../components/Button/btn2/Button';

export default function HomePage() {
  return (
    <div className="home-page">
      <Video src={clouds}/>
      <div className="logo-conaitner">
        <img src={Logo} alt="wizard chess online logo" style={{"width":"450px"}}/>
        <Button content={"watch the trailer"}/>
      </div>
    </div>
  )
}
