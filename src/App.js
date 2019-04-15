import React, { Component } from 'react';
import logo from './latest.svg';
import './App.css';
import './LandingPage/Logo'
import Logo from './LandingPage/Logo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-sign" alt="logo" />
          <Logo/>
        </header>
      </div>
    );
  }
}

export default App;
