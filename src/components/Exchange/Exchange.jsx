import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import axios from 'axios'
// import { CopyToClipboard } from 'react-copy-to-clipboard';
import Buy from './Buy/Buy'
import Sell from './Sell/Sell'

// import Header from "../Header/Header";
import TextInput from "../../app/common/form/TextInput";
import History from "./History/ExchangeHistory";
import Charts from './Charts/Charts'
import Select from "react-select";
import styles from "../Deposit/DepositCrypto.module.css";
import Pagelayout from '../Nav/PageLayout/PageLayout'
import SelectInput from '../../app/common/form/SelectInput'

// Images

import Ethereum from '../../app/assets/img/ethereum.png'


const StateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors
})


class Exchange extends Component {
  state = {
    address: undefined,
    selectedCoin: '',
    phoneNumber: '',
    transactionId: '',
    copied: false,
   

  };

  componentDidMount() {
    this.setState({ phoneNumber: this.props.auth.loggedInUser.phoneNumber })
  }

  onChange = ({ target }) => {
    this.setState({
      [target.name]: target.value
    }, () => {
      const details = {
        phoneNumber: this.state.phoneNumber,
        symbol: this.state.selectedCoin
      }
      axios.post('http://34.83.183.132:4000/api/trade/deposit/crypto/address', details)
        .then(res => {
          this.setState({
            address: res.data.address
          })
        })
    })
  }

  onSubmit = e => {
    e.preventDefault();
  };

  render() {


    return (
      <Pagelayout>
        <Fragment>
          {/* <Header /> */}
          <div className={["container  pt-5 pb-5"].join(" ")}>
            <div className="row">
              <div
                className={[
                  styles.depositForm,
                  "pt-3 pb-3 mb-5 col-sm box-shadow m-3"
                ].join(" ")}
              >
                <h1 className={styles.deposit}>TRADE</h1>
                
                <nav>
                  <div className="nav nav-tabs mb-3" id="nav-tab" role="tablist">
                    <a className="nav-item nav-link active" id="nav-crypto-tab" data-toggle="tab" href="#nav-crypto" role="tab" aria-controls="nav-crypto" aria-selected="true">BUY</a>
                    <a className="nav-item nav-link" id="nav-cash-tab" data-toggle="tab" href="#nav-cash" role="tab" aria-controls="nav-cash" aria-selected="false">SELL</a>
                  </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                  <div className="tab-pane fade show active" id="nav-crypto" role="tabpanel" aria-labelledby="nav-crypto-tab">
                     <Buy />
                  </div>
                  <div className="tab-pane fade" id="nav-cash" role="tabpanel" aria-labelledby="nav-cash-tab">
                     <Sell />
                  </div>
                </div>
              </div>
              <div className="col-sm my-3">
                {/* <History /> */}
                <Charts />
              </div>
            </div>
            <div className='row'>
                <div className='col-sm-12'>
                  <History />
                </div>
                
            </div>
          </div>
        </Fragment>
      </Pagelayout>
    );
  }
}

export default connect(StateToProps, null)(Exchange);
