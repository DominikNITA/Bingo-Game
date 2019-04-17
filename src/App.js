import React, { Component } from 'react';
import sign from './latest.svg';
import './App.css';
import './LandingPage/Logo'
import Logo from './LandingPage/Logo';
import Menu from './LandingPage/Menu';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="content">
          <img src={sign} className="App-sign" alt="sign" />
          <Logo/>
          <Menu/>
        </header>
      </div>
    );
  }
}

export default App;
