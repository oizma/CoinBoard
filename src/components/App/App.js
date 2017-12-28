import React, { Component } from 'react';
import './App.css';
import { CoinTable } from '../';

class App extends Component {

  _openNav = () => {
    document.getElementById("myNav").style.height = "100%";
  }

  _closeNav = () => {
      document.getElementById("myNav").style.height = "0%";
  }

  render() {
    return (
      <div className="main">

        <div id="myNav" className="overlay">
          <a className="closebtn" onClick={this._closeNav}>&times;</a>
          <div className="overlay-content">
            <h1 className="support-title">많은 후원바랍니다.</h1>
            <div className="support-container">
              <p className="support">비트코인(BTC)</p>
              <p className="support">3Jd9uc2zNEbsxPFjPKzYNUHqEHSeAjbVeW</p>
            </div>
            <div className="support-container">
              <p className="support">이더리움(ETH)</p>
              <p className="support">0x565eae611fdb4fbff7e6cb3c38bd90db8581a711</p>
            </div>
            <div className="support-container">
              <p className="support">비트코인캐시(BCC)</p>
              <p className="support">36PjEmAezK7P3AqVZWY6dkM1Y9qeDLnMLF</p>
            </div>
          </div>
        </div>

        <div className="nav-bar">
          <h1>Coin Board <button className="support-button" onClick={this._openNav}>&#128540;</button></h1>
        </div>
        <CoinTable/>
      </div>
    );
  }
}

export default App;
