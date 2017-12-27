import React, { Component } from 'react';
import request from 'request';
import Coininfo from './Coininfo'
import './Coinone.css';

class Coinone extends Component {

  state = {}

  componentWillMount() {
    this._initializeData();
  }

  componentDidMount() {
    try {
      setInterval(() => {
        request('https://api.coinone.co.kr/ticker?currency=all', (error, response, body) => {
          this.setState({
            pre: this.state.info,
            info: JSON.parse(body)
          });
        });
      }, 3000);
    } catch (exception) {
      console.log("coinone server down!!!");
    }
  }

  _initializeData = () => {
    request('https://api.coinone.co.kr/ticker?currency=all', (error, response, body) => {
      this.setState({
        pre: JSON.parse(body),
        info: JSON.parse(body)
      });
    });
  }

  render() {
    let info = this.state.info;
    let pre = this.state.pre;

    return (
      <div>
        {(info) ? (
        <div className="coin-table-obj">
          <Coininfo coin={info.btc} pre={pre.btc}/>
          <Coininfo coin={info.bch} pre={pre.bch}/>
          <Coininfo coin={info.qtum} pre={pre.qtum}/>
          <Coininfo coin={info.etc} pre={pre.etc}/>
          <Coininfo coin={info.ltc} pre={pre.ltc}/>
          <Coininfo coin={info.iota} pre={pre.iota}/>
          <Coininfo coin={info.xrp} pre={pre.xrp}/>
          <Coininfo coin={info.btg} pre={pre.btg}/>
        </div>
        ) : ( null )}
      </div>
    );
  }
}

export default Coinone;
