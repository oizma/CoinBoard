import React, { Component } from 'react';
import '../CoinTable/Coininfo.css';

class Coininfo extends Component {

  componentDidMount() {
    let coin = this.props.coin;
    let name = coin.currency;
    let id = "coinone-" + name;
    let percent = ((coin.last/coin.first - 1) * 100).toFixed(2);

    this._changePercentCSS(id, percent);
  }

  componentDidUpdate() {
    let coin = this.props.coin;
    let name = coin.currency;
    let id = "coinone-" + name;
    let change = this.props.coin.last - this.props.pre.last;
    let percent = ((coin.last/coin.first - 1) * 100).toFixed(2);

    this._changeCSS(id, change, percent);
    setTimeout(() => {this._changeCSS(id, 0, percent)}, 500);
  }

  _changeCSS = (id, change, percent) => {
    let lastStyle = document.getElementById(id);
    let percentStyle = document.getElementById(id + "-percent");

    if (change < 0) {
      lastStyle.style.background = "#60baf7";
      lastStyle.style.color="white";
      percentStyle.style.color = "white";
    }
    else if (change > 0) {
      lastStyle.style.background = "#f78060";
      lastStyle.style.color="white";
      percentStyle.style.color = "white";
    }
    else {
      lastStyle.style.background = "white";
      lastStyle.style.color="black";
      this._changePercentCSS(id, percent);
    }
  }

  _changePercentCSS = (id, percent) => {
    let percentStyle = document.getElementById(id + "-percent");

    if (percent > 0) {
      percentStyle.style.color = "#f78060";
    }
    else if (percent < 0) {
      percentStyle.style.color = "#60baf7";
    }
    else {
      percentStyle.style.color = "black";
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
    let name = coin.currency;
    let id = "coinone-" + name;
    let percent = ((coin.last/coin.first - 1) * 100).toFixed(2);

    return (
      <div id={id} className="coin-card" onClick={this._chartLink.bind(this, coin.currency)}>
        <h2>{coin.currency.toUpperCase()}</h2>
        <p className="detail">&#x20A9; {coin.last}</p>
        <p id={id + "-percent"} className="detail">{(percent > 0) ? ("+" + percent + "%") : percent + "%" }</p>
      </div>
    );
  }
}

export default Coininfo;
