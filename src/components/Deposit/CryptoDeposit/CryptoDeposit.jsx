import React, { Component } from 'react'
import axios from 'axios'
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { CopyToClipboard } from 'react-copy-to-clipboard';

import Bitcoin from '../../../app/assets/img/Bitcoin.svg'
import TextInput from "../../../app/common/form/TextInput";
import SelectInput from '../../../app/common/form/SelectInput'
import styles from "../DepositCrypto.module.css";

import { verifyTransaction } from '../../../app/store/actions/depositActions'



const StateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
})

const actions = {
    verifyTransaction
}

class CryptoDeposit extends Component {
    state = {
        address: undefined,
        selectedCoin: '',
        phoneNumber: '',
        transactionId: '',
        copied: false,

    };



    onChange = ({ target }) => {
        this.setState({
            [target.name]: target.value
        }, () => {
            const details = {
                phoneNumber: this.state.phoneNumber,
                symbol: this.state.selectedCoin
            }
            axios.post('https://backend.bithela.com/api/trade/deposit/crypto/address', details)
                .then(res => {
                    console.log('Crypto Address', res.data)
                    this.setState({
                        address: res.data.address,
                        copied: false
                    })
                })
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        const data = {
            phoneNumber: this.props.auth.loggedInUser.phoneNumber,
            txtId: this.state.transactionId
        };

        this.props.verifyTransaction(data, this.props.history)

    }



    render() {
        const coinOptions = [
            { label: '* Select Coin', value: 0 },
            { value: "BTC", label: "Bitcoin" },
            { value: "ETH", label: "Etherium" },

        ]
        return (
            <div>
                <p className="mb-0">Select Deposits Currency</p>
                <div>

                    <SelectInput
                        name='selectedCoin'
                        value={this.state.selectedCoin}
                        options={coinOptions}
                        onChange={this.onChange}
                        info="Coin Type"

                    />
                    <div
                        className={[styles.jumbotronBackground, "jumbotron"].join(
                            " "
                        )}
                    >
                        <h4 className={styles.important}>STEP 1</h4>
                        <p>
                            Send only {this.state.selectedCoin} to this deposit address. Sending any other
                            currency to this address may result in the loss of your
                            deposit.
                        </p>
                        {/* <p className="lead">Limit 500 USD Lorem ipsum Lorem ipsum</p> */}
                        <TextInput
                            placeholder="Deposit Address"
                            onChange={this.onChange}
                            name="address"
                            value={this.state.address}
                            icon={<i className="fas fa-wallet"></i>}
                            disabled={true}
                        />

                        <CopyToClipboard
                            text={this.state.address}
                            onCopy={() => this.setState({ copied: true })}>
                            <button className={styles.copyDepositAddress}>
                                {/* Copy Address */}
                                {this.state.copied ? 'Copied' : 'Copy Address'}
                            </button>
                        </CopyToClipboard>

                        <div className='mt-3'>
                            <h4 className={styles.important}>STEP 2</h4>
                            <p> Kindly paste your Transaction ID to verify.</p>
                            <form onSubmit={this.onSubmit}>
                                <TextInput
                                    placeholder="Transaction ID"
                                    onChange={this.onChange}
                                    name="transactionId"
                                    value={this.state.transactionId}
                                    icon={<i className="fas fa-money-check-alt"></i>}
                                />

                                <button type="submit" className={styles.copyDepositAddress}>
                                    Verify
                                </button>
                            </form>
                        </div>
                    </div>




                </div>

            </div>
        )
    }
}

export default connect(StateToProps, actions)(withRouter(CryptoDeposit));
