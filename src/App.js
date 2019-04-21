import React, { Component } from 'react';
import './App.css';
import Logo from './LandingPage/Logo';
import Menu from './LandingPage/Menu';
import RightBanner from './Background/RightBanner';
import LeftBanner from './Background/LeftBanner/LeftBanner';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LeftBanner/>
        <div className="content">
          <Logo/>
          <Menu/>
        </div>
        <RightBanner/>
      </div>
    );
  }
}

export default App;
