import React, { Component } from 'react';
import './Coininfo.css';

class Coininfo extends Component {

  componentWillUpdate() {
    this._changeCSS(this.props.name, this.props.info.last - this.props.pre.last);
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
    let info = this.props.info;
    let name = this.props.name;

    return (
      <div id={name} className="coin-card">
        <h2>{name}</h2>
        <h3>{info.last}</h3>
      </div>
    );
  }
}

export default Coininfo;
