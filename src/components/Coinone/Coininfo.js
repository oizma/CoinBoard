import React, { Component } from 'react';
import './Coininfo.css';

class Coininfo extends Component {

  componentDidUpdate() {
    this._changeCSS(this.props.coin.currency, this.props.coin.last - this.props.pre.last);
    setTimeout(() => {this._changeCSS(this.props.coin.currency, 0)}, 500);
  }

  _changeCSS = (id, change) => {
    let lastStyle = document.getElementById(id);

    if (change < 0) {
      lastStyle.style.background = "#60baf7";
      lastStyle.style.color="white";
    }
    else if (change > 0) {
      lastStyle.style.background = "#f78060";
      lastStyle.style.color="white";
    }
    else {
      lastStyle.style.background = "white";
      lastStyle.style.color="black";
    }
  }

  _chartLink = (coinName) => {
    if (coinName !== "btc")
      window.location.href="https://coinone.co.kr/chart/?site=Coinone" + coinName.toUpperCase() + "&unit_time=15m";
    else
      window.location.href="https://coinone.co.kr/chart/?site=Coinone&unit_time=15m";
  }

  render() {
    let coin = this.props.coin;

    return (
      <div id={coin.currency} className="coin-card" onClick={this._chartLink.bind(this, coin.currency)}>
        <h2>{coin.currency.toUpperCase()}</h2>
        <h3> &#x20A9; {coin.last}</h3>
      </div>
    );
  }
}

export default Coininfo;
