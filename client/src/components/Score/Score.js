import React from 'react';
import './Score.css';
import Flags from 'country-flag-icons/react/3x2';

export default function Score(props) {

  return (
    <div className="score-board">
      
      <div className="player-info">

        <div className="flag-icon">
          <img src={props.flag} alt={props.alt} />
          <Flags.IS title="United States" className="..."/>
          <h2 className="player-name">
            {props.name}
          </h2>
        </div>

        <div className="user-info">
          <p className="info">Rank: {props.rank}</p>
          <p className="info">Wins: {props.wins}</p>
        </div>
      </div>

      <div className="timer">
        <div className="time-txt">
         <p>Remaining time</p> 
        </div>
        <div className="clock">
          {props.time}
        </div>
      </div>

      <div className="killed-pieces">
        <p>killed pieces</p>
        <div className="killed-pieces-icons">
          <div className="piece-q">{props.q}</div>
          <div className="piece-b">{props.b}</div>
          <div className="piece-r">{props.r}</div>
          <div className="piece-n">{props.n}</div>
          <div className="piece-p">{props.p}</div>
        </div>
      </div>
    </div>
  )
}
