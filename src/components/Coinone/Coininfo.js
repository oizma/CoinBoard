import React, { Component } from 'react';
import './Coininfo.css';

class Coininfo extends Component {

  componentWillUpdate() {
    this._changeCSS(this.props.coin.currency, this.props.coin.last - this.props.pre.last);
  }

  _changeCSS = (id, change) => {
    let lastStyle = document.getElementById(id);

    if (change > 0) {
      lastStyle.style.background = "#60baf7";
      lastStyle.style.color="white";
    }
    else if (change < 0) {
      lastStyle.style.background = "#f78060";
      lastStyle.style.color="white";
    }
    else {
      lastStyle.style.background = "white";
      lastStyle.style.color="black";
    }
  }

  render() {
    let coin = this.props.coin;

    return (
      <div id={coin.currency} className="coin-card">
        <h2>{coin.currency.toUpperCase()}</h2>
        <h3> &#x20A9; {coin.last}</h3>
      </div>
    );
  }
}

export default Coininfo;
