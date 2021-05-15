import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ReactAudioPlayer from 'react-audio-player';
import sound from './audio/theme.mp3';
import React, { Component } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import Login from './pages/LoginPage/LoginPage';
import Signin from './pages/SigninPage/SigninPage';
import Game from './pages/GamePageRand/GamePageRand';
import Rules from './pages/RulesPage/Rules';
import Play from './pages/PlayPage/PlayPage';
import './css/App.css';
import './css/Normalize.css';

class App extends Component {

  render() {
    return (
      <Router>
        <Header/>
        <Switch>
          <Route path="/" exact component={HomePage}/>
          <Route path="/game" exact component={Game}/>
          <Route path="/login" exact component={Login}/>
          <Route path="/signin" exact component={Signin}/>
          <Route path="/rules" exact component={Rules}/>
          <Route path="/play" exact component={Play}/>
          <Route path="/my-account" exact component={Login}/>
        </Switch>
        <div className="audio-player">
          <ReactAudioPlayer
            src={sound}
            autoPlay={true}
            controls
            style={{"width":"100%"}}
          />
        </div>
        <Footer/>
      </Router>
    );
  }
}

export default App;
