import React, { Component } from 'react';
import '../CoinTable/Coininfo.css';

class Coininfo extends Component {

  componentDidMount() {
    let id = "bitfinex-" + this.props.info[0];
    let percent = (this.props.info[6] * 100);
    this._changePercentCSS(id, percent);
  }

  componentDidUpdate() {
    let name = this.props.info[0];
    let change = this.props.info[7] - this.props.pre[7];
    let id = "bitfinex-" + name;
    let percent = (this.props.info[6] * 100);

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
    coinName = coinName.slice(1);
    let filter = "win16|win32|win64|mac|macintel";

    if ( navigator.platform ) {
      if ( filter.indexOf( navigator.platform.toLowerCase() ) < 0 ) {
        // mobile
        window.location.href="https://www.bitfinex.com/t/+" + coinName;
      }
      else {
        // pc
        window.location.href="https://www.bitfinex.com/t/" + coinName;
      }
    }
  }

  render() {
    let name = this.props.name;
    let tName = this.props.tName;
    let id = "bitfinex-" + this.props.info[0];
    let percent = (this.props.info[6] * 100).toFixed(2);

    return (
      <div id={id} className="coin-card" onClick={this._chartLink.bind(this, tName)}>
        <h2>{name}</h2>
        <p className="detail">$ {this.props.info[7]}</p>
        <p id={id + "-percent"} className="detail">{(percent > 0) ? ("+" + percent + "%") : percent + "%" }</p>
      </div>
    );
  }
}

export default Coininfo;
