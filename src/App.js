import React, { Component } from 'react';
import './App.css';
import RightBanner from './Background/RightBanner';
import LeftBanner from './Background/LeftBanner/LeftBanner';
import { BrowserRouter, Route} from 'react-router-dom';
import LandingPage from './LandingPage/LandingPage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <LeftBanner/>
          <div className='content'>
            <Route exact path='/' component={LandingPage}/>
            <Route path="/play" component={null}/>
            <Route path="/options" component={null}/>
            <Route path="/about" component={null}/>
            <Route path="/stack" component={null}/>
            <Route path="/intro" component={null}/>
          </div>
          <RightBanner/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
