import React, { Component } from 'react';
import request from 'request';
import Coininfo from './Coininfo';
import '../CoinTable/Market.css';

class Poloniex extends Component {

  state = {}

  componentWillMount() {
    this._initializeData();
  }

  componentDidMount() {
    setInterval(() => {
      request('https://poloniex.com/public?command=returnTicker', (error, response, body) => {
        this.setState({
          pre: this.state.info,
          info: (body) ? JSON.parse(body) : null
        });
      });
    }, 5000);
  }

  _initializeData = () => {
    request('https://poloniex.com/public?command=returnTicker', (error, response, body) => {
      this.setState({
        pre: (body) ? JSON.parse(body) : null,
        info: (body) ? JSON.parse(body) : null
      });
    });
  }

  _market = (num) => {
      let market = null;

      switch(num) {
        case 0:
          market = this._btcMarket();
          break;
        case 1:
          market = this._ethMarket();
          break;
        case 2:
          market = this._usdtMarket();
          break;
        case 3:
          market = this._xmrMarket();
          break;
        default:
      }

      return market;
  }

  _btcMarket = () => {
    let info = this.state.info;
    let pre = this.state.pre;

    return (
      <div className="coin-table-obj">
        <Coininfo name="BTC_AMP" info={info.BTC_AMP} pre={pre.BTC_AMP}/>
        <Coininfo name="BTC_ARDR" info={info.BTC_ARDR} pre={pre.BTC_ARDR}/>
        <Coininfo name="BTC_BCH" info={info.BTC_BCH} pre={pre.BTC_BCH}/>
        <Coininfo name="BTC_BCN" info={info.BTC_BCN} pre={pre.BTC_BCN}/>
        <Coininfo name="BTC_BCY" info={info.BTC_BCY} pre={pre.BTC_BCY}/>
        <Coininfo name="BTC_BELA" info={info.BTC_BELA} pre={pre.BTC_BELA}/>
        <Coininfo name="BTC_BLK" info={info.BTC_BLK} pre={pre.BTC_BLK}/>
        <Coininfo name="BTC_BTCD" info={info.BTC_BTCD} pre={pre.BTC_BTCD}/>
        <Coininfo name="BTC_BTM" info={info.BTC_BTM} pre={pre.BTC_BTM}/>
        <Coininfo name="BTC_BTS" info={info.BTC_BTS} pre={pre.BTC_BTS}/>
        <Coininfo name="BTC_BURST" info={info.BTC_BURST} pre={pre.BTC_BURST}/>
        <Coininfo name="BTC_CLAM" info={info.BTC_CLAM} pre={pre.BTC_CLAM}/>
        <Coininfo name="BTC_CVC" info={info.BTC_CVC} pre={pre.BTC_CVC}/>
        <Coininfo name="BTC_DASH" info={info.BTC_DASH} pre={pre.BTC_DASH}/>
        <Coininfo name="BTC_DCR" info={info.BTC_DCR} pre={pre.BTC_DCR}/>
        <Coininfo name="BTC_DGB" info={info.BTC_DGB} pre={pre.BTC_DGB}/>
        <Coininfo name="BTC_DOGE" info={info.BTC_DOGE} pre={pre.BTC_DOGE}/>
        <Coininfo name="BTC_EMC2" info={info.BTC_EMC2} pre={pre.BTC_EMC2}/>
        <Coininfo name="BTC_ETC" info={info.BTC_ETC} pre={pre.BTC_ETC}/>
        <Coininfo name="BTC_ETH" info={info.BTC_ETH} pre={pre.BTC_ETH}/>
        <Coininfo name="BTC_EXP" info={info.BTC_EXP} pre={pre.BTC_EXP}/>
        <Coininfo name="BTC_FCT" info={info.BTC_FCT} pre={pre.BTC_FCT}/>
        <Coininfo name="BTC_FLDC" info={info.BTC_FLDC} pre={pre.BTC_FLDC}/>
        <Coininfo name="BTC_FLO" info={info.BTC_FLO} pre={pre.BTC_FLO}/>
        <Coininfo name="BTC_GAME" info={info.BTC_GAME} pre={pre.BTC_GAME}/>
        <Coininfo name="BTC_GAS" info={info.BTC_GAS} pre={pre.BTC_GAS}/>
        <Coininfo name="BTC_GNO" info={info.BTC_GNO} pre={pre.BTC_GNO}/>
        <Coininfo name="BTC_GNT" info={info.BTC_GNT} pre={pre.BTC_GNT}/>
        <Coininfo name="BTC_GRC" info={info.BTC_GRC} pre={pre.BTC_GRC}/>
        <Coininfo name="BTC_HUC" info={info.BTC_HUC} pre={pre.BTC_HUC}/>
        <Coininfo name="BTC_LBC" info={info.BTC_LBC} pre={pre.BTC_LBC}/>
        <Coininfo name="BTC_LSK" info={info.BTC_LSK} pre={pre.BTC_LSK}/>
        <Coininfo name="BTC_LTC" info={info.BTC_LTC} pre={pre.BTC_LTC}/>
        <Coininfo name="BTC_MAID" info={info.BTC_MAID} pre={pre.BTC_MAID}/>
        <Coininfo name="BTC_NAV" info={info.BTC_NAV} pre={pre.BTC_NAV}/>
        <Coininfo name="BTC_NEOS" info={info.BTC_NEOS} pre={pre.BTC_NEOS}/>
        <Coininfo name="BTC_NMC" info={info.BTC_NMC} pre={pre.BTC_NMC}/>
        <Coininfo name="BTC_NXC" info={info.BTC_NXC} pre={pre.BTC_NXC}/>
        <Coininfo name="BTC_NXT" info={info.BTC_NXT} pre={pre.BTC_NXT}/>
        <Coininfo name="BTC_OMG" info={info.BTC_OMG} pre={pre.BTC_OMG}/>
        <Coininfo name="BTC_OMNI" info={info.BTC_OMNI} pre={pre.BTC_OMNI}/>
        <Coininfo name="BTC_PASC" info={info.BTC_PASC} pre={pre.BTC_PASC}/>
        <Coininfo name="BTC_PINK" info={info.BTC_PINK} pre={pre.BTC_PINK}/>
        <Coininfo name="BTC_POT" info={info.BTC_POT} pre={pre.BTC_POT}/>
        <Coininfo name="BTC_PPC" info={info.BTC_PPC} pre={pre.BTC_PPC}/>
        <Coininfo name="BTC_RADS" info={info.BTC_RADS} pre={pre.BTC_RADS}/>
        <Coininfo name="BTC_REP" info={info.BTC_REP} pre={pre.BTC_REP}/>
        <Coininfo name="BTC_RIC" info={info.BTC_RIC} pre={pre.BTC_RIC}/>
        <Coininfo name="BTC_SBD" info={info.BTC_SBD} pre={pre.BTC_SBD}/>
        <Coininfo name="BTC_SC" info={info.BTC_SC} pre={pre.BTC_SC}/>
        <Coininfo name="BTC_STEEM" info={info.BTC_STEEM} pre={pre.BTC_STEEM}/>
        <Coininfo name="BTC_STORJ" info={info.BTC_STORJ} pre={pre.BTC_STORJ}/>
        <Coininfo name="BTC_STR" info={info.BTC_STR} pre={pre.BTC_STR}/>
        <Coininfo name="BTC_STRAT" info={info.BTC_STRAT} pre={pre.BTC_STRAT}/>
        <Coininfo name="BTC_SYS" info={info.BTC_SYS} pre={pre.BTC_SYS}/>
        <Coininfo name="BTC_VIA" info={info.BTC_VIA} pre={pre.BTC_VIA}/>
        <Coininfo name="BTC_VRC" info={info.BTC_VRC} pre={pre.BTC_VRC}/>
        <Coininfo name="BTC_VTC" info={info.BTC_VTC} pre={pre.BTC_VTC}/>
        <Coininfo name="BTC_XBC" info={info.BTC_XBC} pre={pre.BTC_XBC}/>
        <Coininfo name="BTC_XCP" info={info.BTC_XCP} pre={pre.BTC_XCP}/>
        <Coininfo name="BTC_XEM" info={info.BTC_XEM} pre={pre.BTC_XEM}/>
        <Coininfo name="BTC_XMR" info={info.BTC_XMR} pre={pre.BTC_XMR}/>
        <Coininfo name="BTC_XPM" info={info.BTC_XPM} pre={pre.BTC_XPM}/>
        <Coininfo name="BTC_XRP" info={info.BTC_XRP} pre={pre.BTC_XRP}/>
        <Coininfo name="BTC_XVC" info={info.BTC_XVC} pre={pre.BTC_XVC}/>
        <Coininfo name="BTC_ZEC" info={info.BTC_ZEC} pre={pre.BTC_ZEC}/>
        <Coininfo name="BTC_ZRX" info={info.BTC_ZRX} pre={pre.BTC_ZRX}/>
      </div>
    );
  }

  _ethMarket = () => {
    let info = this.state.info;
    let pre = this.state.pre;

    return (
      <div className="coin-table-obj">
        <Coininfo name="ETH_BCH" info={info.ETH_BCH} pre={pre.ETH_BCH}/>
        <Coininfo name="ETH_CVC" info={info.ETH_CVC} pre={pre.ETH_CVC}/>
        <Coininfo name="ETH_ETC" info={info.ETH_ETC} pre={pre.ETH_ETC}/>
        <Coininfo name="ETH_GAS" info={info.ETH_GAS} pre={pre.ETH_GAS}/>
        <Coininfo name="ETH_GNO" info={info.ETH_GNO} pre={pre.ETH_GNO}/>
        <Coininfo name="ETH_GNT" info={info.ETH_GNT} pre={pre.ETH_GNT}/>
        <Coininfo name="ETH_LSK" info={info.ETH_LSK} pre={pre.ETH_LSK}/>
        <Coininfo name="ETH_OMG" info={info.ETH_OMG} pre={pre.ETH_OMG}/>
        <Coininfo name="ETH_REP" info={info.ETH_REP} pre={pre.ETH_REP}/>
        <Coininfo name="ETH_STEEM" info={info.ETH_STEEM} pre={pre.ETH_STEEM}/>
        <Coininfo name="ETH_ZEC" info={info.ETH_ZEC} pre={pre.ETH_ZEC}/>
        <Coininfo name="ETH_ZRX" info={info.ETH_ZRX} pre={pre.ETH_ZRX}/>
      </div>
    );
  }

  _usdtMarket = () => {
    let info = this.state.info;
    let pre = this.state.pre;

    return (
      <div className="coin-table-obj">
        <Coininfo name="USDT_BTC" info={info.USDT_BTC} pre={pre.USDT_BTC}/>
        <Coininfo name="USDT_BCH" info={info.USDT_BCH} pre={pre.USDT_BCH}/>
        <Coininfo name="USDT_DASH" info={info.USDT_DASH} pre={pre.USDT_DASH}/>
        <Coininfo name="USDT_ETC" info={info.USDT_ETC} pre={pre.USDT_ETC}/>
        <Coininfo name="USDT_ETH" info={info.USDT_ETH} pre={pre.USDT_ETH}/>
        <Coininfo name="USDT_LTC" info={info.USDT_LTC} pre={pre.USDT_LTC}/>
        <Coininfo name="USDT_NXT" info={info.USDT_NXT} pre={pre.USDT_NXT}/>
        <Coininfo name="USDT_REP" info={info.USDT_REP} pre={pre.USDT_REP}/>
        <Coininfo name="USDT_STR" info={info.USDT_STR} pre={pre.USDT_STR}/>
        <Coininfo name="USDT_ZEC" info={info.USDT_ZEC} pre={pre.USDT_ZEC}/>
        <Coininfo name="USDT_XMR" info={info.USDT_XMR} pre={pre.USDT_XMR}/>
        <Coininfo name="USDT_XRP" info={info.USDT_XRP} pre={pre.USDT_XRP}/>
      </div>
    );
  }

  _xmrMarket = () => {
    let info = this.state.info;
    let pre = this.state.pre;

    return (
      <div className="coin-table-obj">
        <Coininfo name="XMR_BCN" info={info.XMR_BCN} pre={pre.XMR_BCN}/>
        <Coininfo name="XMR_BLK" info={info.XMR_BLK} pre={pre.XMR_BLK}/>
        <Coininfo name="XMR_BTCD" info={info.XMR_BTCD} pre={pre.XMR_BTCD}/>
        <Coininfo name="XMR_DASH" info={info.XMR_DASH} pre={pre.XMR_DASH}/>
        <Coininfo name="XMR_LTC" info={info.XMR_LTC} pre={pre.XMR_LTC}/>
        <Coininfo name="XMR_MAID" info={info.XMR_MAID} pre={pre.XMR_MAID}/>
        <Coininfo name="XMR_NXT" info={info.XMR_NXT} pre={pre.XMR_NXT}/>
        <Coininfo name="XMR_ZEC" info={info.XMR_ZEC} pre={pre.XMR_ZEC}/>
      </div>
    );
  }

  render() {
    let info = this.state.info;

    return (
      <div>
        {(info) ? (
          this._market(this.props.market)
        ) : ( null )}
      </div>
    );
  }
}

export default Poloniex;
