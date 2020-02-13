import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import CryptoDeposit from './CryptoDeposit/CryptoDeposit'
import CashDeposit from './CashDeposit/CashDeposit'

// import Header from "../Header/Header";
import History from "./History/DepositHistory";
import styles from "./DepositCrypto.module.css";
import Pagelayout from '../Nav/PageLayout/PageLayout'

// Images



const StateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors
})


class DepositCrypto extends Component {
  state = {
    address: undefined,
    selectedCoin: '',
    phoneNumber: '',
    transactionId: '',
    copied: false,

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
                <h1 className={styles.deposit}>Deposit</h1>
                
                <nav>
                  <div className="nav nav-tabs mb-3" id="nav-tab" role="tablist">
                    <a className="nav-item nav-link active" id="nav-crypto-tab" data-toggle="tab" href="#nav-crypto" role="tab" aria-controls="nav-crypto" aria-selected="true">CRYPTO</a>
                    <a className="nav-item nav-link" id="nav-cash-tab" data-toggle="tab" href="#nav-cash" role="tab" aria-controls="nav-cash" aria-selected="false">CASH</a>
                  </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                  <div className="tab-pane fade show active" id="nav-crypto" role="tabpanel" aria-labelledby="nav-crypto-tab">
                    <CryptoDeposit />
                  </div>
                  <div className="tab-pane fade" id="nav-cash" role="tabpanel" aria-labelledby="nav-cash-tab">
                    <CashDeposit />
                  </div>
                </div>
              </div>
              <div className="col-sm mt-3">
                <History />
              </div>
            </div>
          </div>
        </Fragment>
      </Pagelayout>
    );
  }
}

export default connect(StateToProps, null)(DepositCrypto);
