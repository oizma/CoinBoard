import React, { Component } from 'react';
import './CoinInfo.css';

class CoinInfo extends Component {

  componentDidUpdate() {
    this._changeCSS();
  }

  _changeCSS = () => {
    let change = this.props.info.last - this.props.pre.last;
    let lastStyle = document.getElementById(this.props.info.currency);

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
    return (
      <div id={this.props.info.currency} className="coin-card">
        <h2>{this.props.info.currency.toUpperCase()}</h2>
        <h3> &#x20A9; {this.props.info.last}</h3>
      </div>
    );
  }
}

export default CoinInfo;
