import React, { Component } from 'react';
import request from 'request';
import Coininfo from './Coininfo'
import '../CoinTable/Market.css';

class Bitfinex extends Component {

  state = {}

  componentWillMount() {
    this._initializeData();
  }

  componentDidMount() {
    try {
      setInterval(() => {
        request(this.state.req_url, (error, response, body) => {
          this.setState({
            pre: this.state.info,
            info: (body) ? JSON.parse(body) : null
          });
        });
      }, 5000);
    } catch (exception) {
      console.log("bitfinex server down!!!");
    }
  }

  _initializeData = () => {
    let coinTickerName = [
      "tBTCUSD", "tLTCUSD", "tETHUSD", "tETCUSD", "tZECUSD",
      "tXMRUSD", "tDSHUSD", "tXRPUSD", "tIOTUSD", "tEOSUSD",
      "tSANUSD", "tOMGUSD", "tBCHUSD", "tNEOUSD", "tETPUSD",
      "tQTMUSD", "tAVTUSD", "tEDOUSD", "tBTGUSD", "tDATUSD",
      "tQSHUSD", "tYYWUSD", "tGNTUSD", "tSNTUSD"
    ];

    let req_url = "https://api.bitfinex.com/v2/tickers?symbols=";
    for (let i in coinTickerName)
      req_url = req_url + coinTickerName[i] + ",";
    req_url = req_url.slice(0, -1);

    this.setState({
      req_url: req_url
    });

    request(req_url, (error, response, body) => {
      console.log(JSON.parse(body));
      this.setState({
        pre: (body) ? JSON.parse(body) : null,
        info: (body) ? JSON.parse(body) : null
      });
    });
  }

  render() {
    let info = this.state.info;
    let pre = this.state.pre;
    let name = [
      "BTC", "LTC", "ETH", "ETC", "ZEC",
      "XMR", "DASH", "XRP", "IOTA", "EOS",
      "SAN", "OMG", "BCH", "NEO", "ETP",
      "QTUM", "AVT", "EDO", "BTG", "DATA",
      "QASH", "YYW", "GNT", "SNT"
    ];

    let tName = [
      "tBTCUSD", "tLTCUSD", "tETHUSD", "tETCUSD", "tZECUSD",
      "tXMRUSD", "tDSHUSD", "tXRPUSD", "tIOTUSD", "tEOSUSD",
      "tSANUSD", "tOMGUSD", "tBCHUSD", "tNEOUSD", "tETPUSD",
      "tQTMUSD", "tAVTUSD", "tEDOUSD", "tBTGUSD", "tDATUSD",
      "tQSHUSD", "tYYWUSD", "tGNTUSD", "tSNTUSD"
    ];

    return (
      <div>
        {(info) ? (
          <div className="coin-table-obj">
            <Coininfo name={name[0]} tName={tName[0]} info={info[0]} pre={pre[0]}/>
            <Coininfo name={name[1]} tName={tName[1]} info={info[1]} pre={pre[1]}/>
            <Coininfo name={name[2]} tName={tName[2]} info={info[2]} pre={pre[2]}/>
            <Coininfo name={name[3]} tName={tName[3]} info={info[3]} pre={pre[3]}/>
            <Coininfo name={name[4]} tName={tName[4]} info={info[4]} pre={pre[4]}/>
            <Coininfo name={name[5]} tName={tName[5]} info={info[5]} pre={pre[5]}/>
            <Coininfo name={name[6]} tName={tName[6]} info={info[6]} pre={pre[6]}/>
            <Coininfo name={name[7]} tName={tName[7]} info={info[7]} pre={pre[7]}/>
            <Coininfo name={name[8]} tName={tName[8]} info={info[8]} pre={pre[8]}/>
            <Coininfo name={name[9]} tName={tName[9]} info={info[9]} pre={pre[9]}/>
            <Coininfo name={name[10]} tName={tName[10]} info={info[10]} pre={pre[10]}/>
            <Coininfo name={name[11]} tName={tName[11]} info={info[11]} pre={pre[11]}/>
            <Coininfo name={name[12]} tName={tName[12]} info={info[12]} pre={pre[12]}/>
            <Coininfo name={name[13]} tName={tName[13]} info={info[13]} pre={pre[13]}/>
            <Coininfo name={name[14]} tName={tName[14]} info={info[14]} pre={pre[14]}/>
            <Coininfo name={name[15]} tName={tName[15]} info={info[15]} pre={pre[15]}/>
            <Coininfo name={name[16]} tName={tName[16]} info={info[16]} pre={pre[16]}/>
            <Coininfo name={name[17]} tName={tName[17]} info={info[17]} pre={pre[17]}/>
            <Coininfo name={name[18]} tName={tName[18]} info={info[18]} pre={pre[18]}/>
            <Coininfo name={name[19]} tName={tName[19]} info={info[19]} pre={pre[19]}/>
            <Coininfo name={name[20]} tName={tName[20]} info={info[20]} pre={pre[20]}/>
            <Coininfo name={name[21]} tName={tName[21]} info={info[21]} pre={pre[21]}/>
            <Coininfo name={name[22]} tName={tName[22]} info={info[22]} pre={pre[22]}/>
            <Coininfo name={name[23]} tName={tName[23]} info={info[23]} pre={pre[23]}/>
          </div>
        ) : ( null )}
      </div>
    );
  }
}

export default Bitfinex;
