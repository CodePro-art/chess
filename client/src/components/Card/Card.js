import React from 'react';
import './Card.css';
import { BsFillPlayFill } from 'react-icons/bs';

export default function Card(props) {
  console.log(props.src);
  return (
    <div class="flip-card ripple-small">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <h3 className="card-title-front">{props.title}</h3>
          <img className="card-img" src={props.src} alt={props.alt}/>
          <div className="content-container-front">
            <p className="card-content">{props.content}</p>
          </div>
        </div>
        <div class="flip-card-back">
          <h3 className="card-title-back">{props.title}</h3>
          <a href="/game" className="go-btn">
            <BsFillPlayFill className="play-icon" size={50}/>
          </a>
        </div>
      </div>
    </div>
  )
}