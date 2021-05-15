import React from 'react';
import FollowUs from '../../assets/svg/followus.svg';
import Logo from '../../images/logo-w.png';
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      
      <div className="footer-mid">
        
        <a href="/" className="mgs-logo">
          <img className="logo-footer" src={Logo} alt="Wizard Chess online logo"/>
        </a>
        <div className="social-links">
          <div className="links">
            
            <a href="/" target="_blank" rel="nofollow"><svg xmlns="http://www.w3.org/2000/svg" width="28.954" height="28.954" viewBox="0 0 28.954 28.954"><path d="M25.851,2.25H3.1A3.1,3.1,0,0,0,0,5.352V28.1a3.1,3.1,0,0,0,3.1,3.1h8.87V21.36H7.9V16.727h4.072V13.2c0-4.017,2.391-6.235,6.054-6.235a24.667,24.667,0,0,1,3.588.313v3.942H19.593a2.317,2.317,0,0,0-2.612,2.5v3.008h4.445l-.711,4.633H16.981V31.2h8.87a3.1,3.1,0,0,0,3.1-3.1V5.352A3.1,3.1,0,0,0,25.851,2.25Z" transform="translate(0 -2.25)" fill="#fff"></path></svg></a>

            <a href="/" target="_blank" rel="nofollow"><svg xmlns="http://www.w3.org/2000/svg" width="28.954" height="28.954" viewBox="0 0 28.954 28.954"><path d="M25.851,2.25H3.1A3.1,3.1,0,0,0,0,5.352V28.1a3.1,3.1,0,0,0,3.1,3.1H25.851a3.1,3.1,0,0,0,3.1-3.1V5.352A3.1,3.1,0,0,0,25.851,2.25Zm-3.16,10.263c.013.181.013.368.013.549a11.978,11.978,0,0,1-12.06,12.06,12,12,0,0,1-6.508-1.9,8.93,8.93,0,0,0,1.021.052,8.5,8.5,0,0,0,5.261-1.81,4.244,4.244,0,0,1-3.962-2.941,4.568,4.568,0,0,0,1.913-.078,4.239,4.239,0,0,1-3.393-4.162v-.052a4.236,4.236,0,0,0,1.913.536A4.23,4.23,0,0,1,5,11.24,4.186,4.186,0,0,1,5.577,9.1a12.035,12.035,0,0,0,8.738,4.434,4.248,4.248,0,0,1,7.232-3.871,8.306,8.306,0,0,0,2.689-1.021,4.228,4.228,0,0,1-1.861,2.333,8.435,8.435,0,0,0,2.443-.659A8.922,8.922,0,0,1,22.691,12.513Z" transform="translate(0 -2.25)" fill="#fff"></path></svg></a>

            <a href="/" target="_blank" rel="nofollow"><svg xmlns="http://www.w3.org/2000/svg" width="28.954" height="28.954" viewBox="0 0 28.954 28.954"><path d="M12.073,13.243l6.153,3.5-6.153,3.5ZM28.954,5.352V28.1a3.1,3.1,0,0,1-3.1,3.1H3.1A3.1,3.1,0,0,1,0,28.1V5.352a3.1,3.1,0,0,1,3.1-3.1H25.851A3.1,3.1,0,0,1,28.954,5.352ZM26.239,16.746a31.055,31.055,0,0,0-.491-5.7,2.95,2.95,0,0,0-2.081-2.094c-1.829-.5-9.19-.5-9.19-.5s-7.361,0-9.19.5a2.95,2.95,0,0,0-2.081,2.094,31.016,31.016,0,0,0-.491,5.7,31.055,31.055,0,0,0,.491,5.7,2.908,2.908,0,0,0,2.081,2.062c1.829.491,9.19.491,9.19.491s7.361,0,9.19-.5a2.908,2.908,0,0,0,2.081-2.062,30.959,30.959,0,0,0,.491-5.694Z" transform="translate(0 -2.25)" fill="#fff"></path></svg></a>
            
            <a href="/" className="discord" target="_blank" rel="nofollow"><svg xmlns="http://www.w3.org/2000/svg" width="28.954" height="32.79" viewBox="0 0 28.954 32.79"><path d="M20.557,16a1.824,1.824,0,1,0,1.687,1.819A1.747,1.747,0,0,0,20.557,16Zm-6.035,0a1.824,1.824,0,1,0,1.687,1.819A1.747,1.747,0,0,0,14.522,16Z" transform="translate(-3.063 -1.427)" fill="#fff"></path><path d="M27.653,0H5.5a3.394,3.394,0,0,0-3.39,3.39V25.547a3.394,3.394,0,0,0,3.39,3.39H24.247l-.876-3.026,2.117,1.951,2,1.835L31.06,32.79V3.39A3.419,3.419,0,0,0,27.653,0ZM21.271,21.413s-.6-.711-1.091-1.323a5.243,5.243,0,0,0,2.993-1.951,9.462,9.462,0,0,1-1.9.976,11.858,11.858,0,0,1-2.4.711,11.584,11.584,0,0,1-4.283-.017,12.589,12.589,0,0,1-2.431-.711,9.69,9.69,0,0,1-1.207-.562c-.05-.033-.1-.05-.149-.083-.033-.017-.05-.033-.066-.033-.3-.165-.463-.281-.463-.281a5.168,5.168,0,0,0,2.894,1.935c-.5.628-1.108,1.356-1.108,1.356a6,6,0,0,1-5.043-2.5A21.832,21.832,0,0,1,9.4,9.376a8.194,8.194,0,0,1,4.63-1.72l.165.2A10.849,10.849,0,0,0,9.861,10s.364-.2.976-.463A12.956,12.956,0,0,1,14.59,8.5a1.63,1.63,0,0,1,.281-.033,13.991,13.991,0,0,1,3.34-.033A13.746,13.746,0,0,1,23.189,10a10.858,10.858,0,0,0-4.117-2.083l.231-.265a8.16,8.16,0,0,1,4.63,1.72,21.832,21.832,0,0,1,2.381,9.558,6.06,6.06,0,0,1-5.043,2.48Z" transform="translate(-2.106)" fill="#fff"></path></svg></a>
        </div>
        <img src={FollowUs} width="200"/>
        </div>
      </div>

      <div className="footer-copyright">
        ©2021 Wizard's Chess Online  ·  All rights reserved <br/>
        All trademarks mentioned belong to their respective owners
      </div>
      <div className="footer-line">
        <div className="max-width">
          <a href="/privacy" className="no-style">Privacy Policy</a> · 
          <a href="/terms-of-service" className="no-style">Terms of use</a> · 
          <a className="no-style" href="mailto:contact@magicchessonline.com">Contact us</a> · 
          <a href="https://magicchessonline.com/PressKit.zip" target="_blank" className="no-style">Press kit</a>
        </div>
      </div>
    </footer>
  )
}

  
        
 

            
            
        