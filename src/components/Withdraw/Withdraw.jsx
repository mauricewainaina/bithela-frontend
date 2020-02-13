import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import axios from 'axios'
import CryptoWithdraw from './CryptoWithdraw/CryptoWithdraw'
import CashWithdraw from './CashWithdraw/CashWithdraw'

// import Header from "../Header/Header";
import History from "./History/WithdrawHistory";
import styles from "../Deposit/DepositCrypto.module.css";
import Pagelayout from '../Nav/PageLayout/PageLayout'


const StateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors
})


class Withdraw extends Component {
  state = {
    address: undefined,
    selectedCoin: '',
    phoneNumber: '',
    transactionId: '',
    copied: false,

  };

  componentDidMount() {
    console.log(this.props.auth)
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
          console.log('Crypto Address', res.data)
          this.setState({
            address: res.data.address
          })
        })
    })
  }

  onSubmit = e => {
    e.preventDefault();
    console.log("Submitted");
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
                <h1 className={styles.deposit}>Withdraw</h1>
                
                <nav>
                  <div class="nav nav-tabs mb-3" id="nav-tab" role="tablist">
                    <a class="nav-item nav-link active" id="nav-crypto-tab" data-toggle="tab" href="#nav-crypto" role="tab" aria-controls="nav-crypto" aria-selected="true">CRYPTO</a>
                    <a class="nav-item nav-link" id="nav-cash-tab" data-toggle="tab" href="#nav-cash" role="tab" aria-controls="nav-cash" aria-selected="false">CASH</a>
                  </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                  <div className="tab-pane fade show active" id="nav-crypto" role="tabpanel" aria-labelledby="nav-crypto-tab">
                    <CryptoWithdraw />
                  </div>
                  <div className="tab-pane fade" id="nav-cash" role="tabpanel" aria-labelledby="nav-cash-tab">
                    <CashWithdraw />
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

export default connect(StateToProps, null)(Withdraw);
