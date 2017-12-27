import React from 'react';
import { Coinone, Poloniex } from '../'

import './CoinTable.css';

class CoinTable extends React.Component {
  state = {
    poloniexMenu: 0
  };

  _poloniexMenu = (num) => {
    let btcMarket = document.getElementById("polo-btc-market");
    let ethMarket = document.getElementById("polo-eth-market");
    let usdtMarket = document.getElementById("polo-usdt-market");
    let xmrMarket = document.getElementById("polo-xmr-market");

    switch (num) {
      case 0:
        btcMarket.style.display="flex";
        ethMarket.style.display="none";
        usdtMarket.style.display="none";
        xmrMarket.style.display="none";
        break;
      case 1:
        btcMarket.style.display="none";
        ethMarket.style.display="flex";
        usdtMarket.style.display="none";
        xmrMarket.style.display="none";
        break;
      case 2:
        btcMarket.style.display="none";
        ethMarket.style.display="none";
        usdtMarket.style.display="flex";
        xmrMarket.style.display="none";
        break;
      case 3:
        btcMarket.style.display="none";
        ethMarket.style.display="none";
        usdtMarket.style.display="none";
        xmrMarket.style.display="flex";
        break;
      default:
    }
  }

  render() {
    return (
      <div className="coin-table">
        <div className="market">
          <h2 className="coin-title">Coinone</h2>
          <Coinone/>
        </div>

        <div className="market">
          <h2 className="coin-title">Poloniex</h2>
          <div className="poloniex-button-group">
            <div className="poloniex-button" onClick={this._poloniexMenu.bind(this, 0)}>BTC</div>
            <div className="poloniex-button" onClick={this._poloniexMenu.bind(this, 1)}>ETH</div>
            <div className="poloniex-button" onClick={this._poloniexMenu.bind(this, 2)}>USDT</div>
            <div className="poloniex-button" onClick={this._poloniexMenu.bind(this, 3)}>XMR</div>
          </div>
          <div id="polo-btc-market"><Poloniex market={0}/></div>
          <div id="polo-eth-market"><Poloniex market={1}/></div>
          <div id="polo-usdt-market"><Poloniex market={2}/></div>
          <div id="polo-xmr-market"><Poloniex market={3}/></div>
        </div>
      </div>
    );
  }
}

export default CoinTable;
