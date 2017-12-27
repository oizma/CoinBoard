import React, { Component } from 'react';
import request from 'request';
import Coininfo from './Coininfo'
import '../CoinTable/Market.css';

class Bithumb extends Component {

  state = {}

  componentWillMount() {
    this._initializeData();
  }

  componentDidMount() {
    try {
      setInterval(() => {
        request('https://api.bithumb.com/public/ticker/all', (error, response, body) => {
          this.setState({
            pre: this.state.info,
            info: (body) ? JSON.parse(body) : null
          });
        });
      }, 5000);
    } catch (exception) {
      console.log("Bithumb server down!!!");
    }
  }

  _initializeData = () => {
    request('https://api.bithumb.com/public/ticker/all', (error, response, body) => {
      this.setState({
        pre: (body) ? JSON.parse(body) : null,
        info: (body) ? JSON.parse(body) : null
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
          <Coininfo name="BTC" coin={info.data.BTC} pre={pre.data.BTC}/>
          <Coininfo name="ETH" coin={info.data.ETH} pre={pre.data.ETH}/>
          <Coininfo name="DASH" coin={info.data.DASH} pre={pre.data.DASH}/>
          <Coininfo name="LTC" coin={info.data.LTC} pre={pre.data.LTC}/>
          <Coininfo name="ETC" coin={info.data.ETC} pre={pre.data.ETC}/>
          <Coininfo name="XRP" coin={info.data.XRP} pre={pre.data.XRP}/>
          <Coininfo name="BCH" coin={info.data.BCH} pre={pre.data.BCH}/>
          <Coininfo name="XMR" coin={info.data.XMR} pre={pre.data.XMR}/>
          <Coininfo name="ZEC" coin={info.data.ZEC} pre={pre.data.ZEC}/>
          <Coininfo name="QTUM" coin={info.data.QTUM} pre={pre.data.QTUM}/>
          <Coininfo name="BTG" coin={info.data.BTG} pre={pre.data.BTG}/>
          <Coininfo name="EOS" coin={info.data.EOS} pre={pre.data.EOS}/>
        </div>
        ) : ( null )}
      </div>
    );
  }
}

export default Bithumb;
