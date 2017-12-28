import React, { Component } from 'react';
import '../CoinTable/Coininfo.css';

class Coininfo extends Component {

  componentDidMount() {
    let percent = (this.props.info.percentChange * 100).toFixed(2);
    let percentStyle = document.getElementById(this.props.name + "-polo-percent");
    if (percent > 0) {
      percentStyle.style.color = "#f78060";
    }
    else if (percent < 0) {
      percentStyle.style.color = "#60baf7";
    }
  }

  componentDidUpdate() {
    this._changeCSS(this.props.name, this.props.info.last - this.props.pre.last, (this.props.info.percentChange * 100).toFixed(2));
    setTimeout(() => {this._changeCSS(this.props.name, 0, (this.props.info.percentChange * 100).toFixed(2))}, 500);
  }

  _changeCSS = (id, change, percent) => {
    let lastStyle = document.getElementById(id);
    let percentStyle = document.getElementById(id + "-polo-percent");

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
    let percentStyle = document.getElementById(id + "-polo-percent");

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
        window.location.href="https://m.poloniex.com/#/exchange/" + coinName;
      }
      else {
        // pc
        window.location.href="https://poloniex.com/exchange#" + coinName;
      }
    }
  }

  render() {
    let info = this.props.info;
    let name = this.props.name;
    let percent = (info.percentChange * 100).toFixed(2);

    return (
      <div id={name} className="coin-card" onClick={this._chartLink.bind(this, name)}>
        <h2>{name}</h2>
        <p className="detail">{info.last}</p>
        <p id={name + "-polo-percent"} className="detail">{(percent > 0) ? ("+" + percent + "%") : percent + "%" }</p>
      </div>
    );
  }
}

export default Coininfo;
