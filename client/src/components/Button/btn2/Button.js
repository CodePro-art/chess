import React from 'react';
import './Button.css';

export default function Button(props) {

  return (
    <a href="/" data-fancybox="" target="_blank" rel="nofollow" className="btn btn-outline white">
      {props.content}
    </a>
  )
}
