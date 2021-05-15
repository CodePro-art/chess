import React from 'react';
import './Video.css';

export default function Video(props) {
  return (
    <div className="video-container">
      <video autoPlay loop muted 
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: "0",
          left: "0",
          objectFit: "cover",
          transform: "tanslate(-50%,-50%)",
          zIndex: "-10" }}>
        <source src={props.src} type="video/mp4"/>
      </video>
    </div>
  )
}
