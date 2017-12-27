import React, { Component } from 'react';
import './Coininfo.css';

class Coininfo extends Component {

  componentDidUpdate() {
    this._changeCSS("bithumb-" + this.props.name, this.props.coin.sell_price - this.props.pre.sell_price);
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

  render() {
    let coin = this.props.coin;
    let name = this.props.name

    return (
      <div id={"bithumb-" + name} className="coin-card">
        <h2>{name}</h2>
        <h3> &#x20A9; {coin.sell_price}</h3>
      </div>
    );
  }
}

export default Coininfo;
