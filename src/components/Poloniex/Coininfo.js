import React, { Component } from 'react';
import '../CoinTable/Coininfo.css';

class Coininfo extends Component {

  componentDidUpdate() {
    this._changeCSS(this.props.name, this.props.info.last - this.props.pre.last);
    setTimeout(() => {this._changeCSS(this.props.name, 0)}, 500);
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
    window.location.href="https://poloniex.com/exchange#" + coinName;
  }

  render() {
    let info = this.props.info;
    let name = this.props.name;

    return (
      <div id={name} className="coin-card" onClick={this._chartLink.bind(this, name)}>
        <h2>{name}</h2>
        <h3>{info.last}</h3>
      </div>
    );
  }
}

export default Coininfo;
