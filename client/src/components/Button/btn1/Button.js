import React from 'react';
import './Button.css';

export default function Button(props) {

  return (
    <div class="svg-wrapper">
      <svg height="40" width="150" xmlns="http://www.w3.org/2000/svg">
        <rect id="shape" height="40" width="150" />
        <div id="text">
          <a href={props.href}><span class="spot"></span>{props.content}</a>
        </div>
      </svg>
    </div>
  )
}
