import React, { Component } from 'react';
import '../CoinTable/Coininfo.css';

class Coininfo extends Component {

  componentDidMount() {
    let id = "bithumb-" + this.props.name;
    let percent = ((this.props.coin.sell_price/this.props.coin.opening_price - 1) * 100).toFixed(2);
    this._changePercentCSS(id, percent);
  }

  componentDidUpdate() {
    let coin = this.props.coin;
    let name = this.props.name;
    let change = this.props.coin.sell_price - this.props.pre.sell_price;
    let id = "bithumb-" + name;
    let percent = ((coin.sell_price/coin.opening_price - 1) * 100).toFixed(2);

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
    let filter = "win16|win32|win64|mac|macintel";

    if ( navigator.platform ) {
      if ( filter.indexOf( navigator.platform.toLowerCase() ) < 0 ) {
        // mobile
        if (coinName == "BTC")
          window.location.href="https://m.bithumb.com/u2/US205";
        else
          window.location.href="https://m.bithumb.com/trade/chart/" + coinName;
      }
      else {
        // pc
        window.location.href="http://index.bithumb.com/coinsdaq/index.php?coin=" + coinName;
      }
    }
  }

  render() {
    let coin = this.props.coin;
    let name = this.props.name;
    let id = "bithumb-" + name;
    let percent = ((coin.sell_price/coin.opening_price - 1) * 100).toFixed(2);

    return (
      <div id={id} className="coin-card" onClick={this._chartLink.bind(this, name)}>
        <h2>{name}</h2>
        <p className="detail">&#x20A9; {coin.sell_price}</p>
        <p id={id + "-percent"} className="detail">{(percent > 0) ? ("+" + percent + "%") : percent + "%" }</p>
      </div>
    );
  }
}

export default Coininfo;
