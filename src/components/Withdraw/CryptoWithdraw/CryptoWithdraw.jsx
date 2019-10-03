import React, { Component } from 'react'
import { connect } from "react-redux";

import TextInput from "../../../app/common/form/TextInput";
import SelectInput from '../../../app/common/form/SelectInput'
import styles from "../../Deposit/DepositCrypto.module.css";

import { withdrawCrypto } from '../../../app/store/actions/withdrawActions'
import { openModal } from "../../../app/store/actions/modalActions";



const StateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
})

const actions = {
    withdrawCrypto,
    openModal
}

class CryptoWithdraw extends Component {
    state = {
        address: '',
        selectedCoin: '',
        amount: '',
        phoneNumber: '',

    };

    componentDidMount() {
        this.setState({
            phoneNumber: this.props.auth.loggedInUser.phoneNumber
        })

    }

    onChange = ({ target }) => {
        this.setState({
            [target.name]: target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        const data = {
            phoneNumber: this.props.auth.loggedInUser.phoneNumber,
            symbol: this.state.selectedCoin,
            address: this.state.address,
            amount: this.state.amount
        };

        this.props.withdrawCrypto(data)

    }



    render() {
        const { openModal } = this.props
        const coinOptions = [
            { label: '* Select Coin', value: 0 },
            { value: "BTC", label: "Bitcoin" },
            { value: "ETH", label: "Etherium" },

        ]
        return (
            <div>
                <p className="mb-0">Select Coin To Withdraw</p>
                <div>
                    <form onSubmit={this.onSubmit}>
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
                            <h4 className={styles.important}>Important</h4>

                            <TextInput
                                placeholder="Withdrawal Address"
                                onChange={this.onChange}
                                name="address"
                                value={this.state.address}
                                required={true}
                                icon={<i className="fas fa-wallet"></i>}
                            />
                            <TextInput
                                placeholder="Amount"
                                onChange={this.onChange}
                                name="amount"
                                value={this.state.amount}
                                required={true}
                                icon={<i className="fas fa-wallet"></i>}
                            />

                            <button type="submit" className={styles.copyDepositAddress}>
                                Submit
                            </button>

                        </div>
                    </form>
                    {/* <button onClick={() => openModal('WithdrawModal')} className={styles.copyDepositAddress}> Open</button> */}
                </div>

            </div>
        )
    }
}

export default connect(StateToProps, actions)(CryptoWithdraw);
