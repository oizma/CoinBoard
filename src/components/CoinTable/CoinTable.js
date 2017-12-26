import React from 'react';
import request from 'request';
import { CoinInfo } from '../'

import './CoinTable.css';

class CoinTable extends React.Component {
  state = {};

  componentDidMount() {
    setInterval(() => {
      request('https://api.coinone.co.kr/ticker?currency=all', (error, response, body) => {
        this.setState({
          pre: (this.state.info) ? this.state.info : JSON.parse(body),
          info: JSON.parse(body)
        });
      });

      // request('https://poloniex.com/public?command=returnTicker', (error, response, body) => {
      //   console.log(JSON.parse(body));
      //   this.setState({
      //     polo_pre: (this.state.polo_info) ? this.state.polo_info : JSON.parse(body),
      //     polo_info: JSON.parse(body)
      //   });
      // });
    }, 1000);
  }

  render() {
    let info = this.state.info;
    let pre = this.state.pre;
    let polo_info = this.state.polo_info;
    let polo_pre = this.state.polo_pre;

    return (
      <div className="coin-table">
        {(info) ? (
          <div className="coin-table-obj">
            <h2 className="coin-title">Coinone</h2>
            <CoinInfo info={info.btc} pre={pre.btc}/>
            <CoinInfo info={info.bch} pre={pre.bch}/>
            <CoinInfo info={info.qtum} pre={pre.qtum}/>
            <CoinInfo info={info.etc} pre={pre.etc}/>
            <CoinInfo info={info.ltc} pre={pre.ltc}/>
            <CoinInfo info={info.iota} pre={pre.iota}/>
            <CoinInfo info={info.xrp} pre={pre.xrp}/>
            <CoinInfo info={info.btg} pre={pre.btg}/>
          </div>
        ) : "Loading"}
      </div>
    );
  }
}

export default CoinTable;
