import React, { Component } from 'react';
import './App.css';
import { CoinTable } from '../';

class App extends Component {

  render() {
    return (
      <div className="main">
        <div className="nav-bar">
          <h1>Coin Board</h1>
        </div>
        <CoinTable/>
      </div>
    );
  }
}

export default App;
