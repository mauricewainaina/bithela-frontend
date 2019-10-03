import React, { Component } from 'react'
import axios from 'axios'
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";


import TextInput from "../../../app/common/form/TextInput";
import SelectInput from '../../../app/common/form/SelectInput'
import styles from "../../Deposit/DepositCrypto.module.css";

import { getBalance } from '../../../app/store/actions/balanceActions'
import { openModal } from '../../../app/store/actions/modalActions'
import { withdrawCash } from '../../../app/store/actions/withdrawActions'



const StateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors,
    balance: state.balance
})

const actions = {
    withdrawCash,
    getBalance,
    openModal
}

class CashWithdraw extends Component {
    state = {
        selectedCurrency: 'KES',
        phoneNumber: '',
        mpesaAmount: '',
        bankAmount: '',
        cashAmount: '',
        exrate: '',
        bankAccount: '',
        bankBranch: ''

    };

    componentDidMount() {
        this.setState({
            phoneNumber: this.props.auth.loggedInUser.phoneNumber
        })
        axios.get(`http://34.83.183.132:4000/api/trade/forex/usd/rate/KES`)
            .then(res => {
                console.log('Crypto Address', res.data)
                this.setState({
                    exrate: res.data.rate,
                })
            })
    }

    onCurrencyChange = ({ target }) => {
        this.setState({
            [target.name]: target.value
        }, () => {
            const symbol = this.state.selectedCurrency

            axios.get(`http://34.83.183.132:4000/api/trade/forex/usd/rate/${symbol}`)
                .then(res => {
                    console.log('Crypto Address', res.data)
                    this.setState({
                        exrate: res.data.rate,
                    })
                })
        })
    }

    onChange = ({ target }) => {
        this.setState({ [target.name]: target.value })
    }

    onMpesaSubmit = (e) => {
        e.preventDefault();
        const data = {
            phoneNumber: this.state.phoneNumber,
            mode: 'Mpesa',
            amount: this.state.mpesaAmount,
            currency: this.state.selectedCurrency,
            exrate: this.state.exrate
        };

        this.props.withdrawCash(data, this.props.history)
        this.setState({
            amount: ''
        });

    }

    onBankSubmit = (e) => {
        e.preventDefault();
        const data = {
            phoneNumber: this.state.phoneNumber,
            mode: 'Bank',
            amount: this.state.bankAmount,
            currency: this.state.selectedCurrency,
            exrate: this.state.exrate,
            bankAccount: this.state.bankAccount,
            bankBranch: this.state.bankBranch
        };

        this.props.withdrawCash(data, this.props.history)
        this.setState({
            amount: ''
        });

    }

    onCashSubmit = (e) => {
        e.preventDefault();
        const data = {
            phoneNumber: this.state.phoneNumber,
            mode: 'Cash',
            amount: this.state.cashAmount,
            currency: this.state.selectedCurrency,
            exrate: this.state.exrate
        };

        this.props.withdrawCash(data, this.props.history)
        this.setState({
            amount: ''
        });

    }


    render() {
        const coinOptions = [
            { label: '* Select Currency', value: 0 },
            { value: "KES", label: "Kenya Shillings" },
            { value: "UGX", label: "Uganda Shillings" },
        ]
        return (
            <div>
                <p className="mb-0">Select Currency you would like to recieve</p>
                <div>
                    {/* <Select
                    className="mb-4"
                    options={this.state.coinOptions}
                    defaultValue={this.state.coinOptions[0]}
                  /> */}
                    <SelectInput
                        name='selectedCurrency'
                        value={this.state.selectedCurrency}
                        options={coinOptions}
                        onChange={this.onCurrencyChange}
                        info="Currency Type"
                    />
                    {this.state.exrate ? (<p>1 USD = {this.state.exrate} {this.state.selectedCurrency}</p>) : (<p></p>)}

                    <div className={[styles.jumbotronBackground, "jumbotron"].join(" ")}>
                        <h4 className={styles.important}>Withdraw Guide </h4>
                        <p>Choose between the options below</p>

                        {/* <a class="btn btn-primary" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                                Link with href
                            </a> */}
                        <div className="d-flex justify-content-center">
                            {this.state.selectedCurrency === 'KES' ? (
                                <div>
                                    <button className={[styles.depositButtons, "btn btn-primary mr-5"].join(" ")} type="button" data-toggle="collapse" data-target="#mpesa" aria-expanded="false" aria-controls="collapseExample">
                                        Mpesa
                                    </button>
                                    <button className={[styles.depositButtons, "btn btn-primary mr-5"].join(" ")} type="button" data-toggle="collapse" data-target="#bank" aria-expanded="false" aria-controls="collapseExample">
                                        Bank
                                    </button>
                                    <button className={[styles.depositButtons, "btn btn-primary mr-5"].join(" ")} type="button" data-toggle="collapse" data-target="#cash" aria-expanded="false" aria-controls="collapseExample">
                                        Cash
                                    </button>
                                </div>

                            ) : (<div>
                                <button className={[styles.depositButtons, "btn btn-primary mr-5"].join(" ")} type="button" data-toggle="collapse" data-target="#bank" aria-expanded="false" aria-controls="collapseExample">
                                    Bank
                                </button>
                                <button className={[styles.depositButtons, "btn btn-primary mr-5"].join(" ")} type="button" data-toggle="collapse" data-target="#cash" aria-expanded="false" aria-controls="collapseExample">
                                    Cash
                            </button>
                            </div>)}


                        </div>
                        {this.state.selectedCurrency === 'KES' ? (
                            <div>
                                <div className="collapse mt-3" id="mpesa">
                                    <div className="card card-body">
                                        <h5>Mpesa</h5>
                                        <form onSubmit={this.onMpesaSubmit}>
                                            <TextInput
                                                name="mpesaAmount"
                                                type='number'
                                                required={true}
                                                placeholder="Enter Amount"
                                                icon='USD'
                                                onChange={this.onChange}
                                                value={this.state.mpesaAmount}
                                            />
                                            <button
                                                type="submit"
                                                className={`${"btn float-right"} ${styles.depositButtons}`}
                                            >
                                                Send
                                            </button>
                                        </form>
                                    </div>
                                </div>
                                <div className="collapse mt-3" id="bank">
                                    <div className="card card-body">
                                        <h5>Bank</h5>
                                        <form onSubmit={this.onBankSubmit}>
                                            <TextInput
                                                name="bankAmount"
                                                type='number'
                                                required={true}
                                                placeholder="Enter Amount"
                                                icon='USD'
                                                onChange={this.onChange}
                                                value={this.state.bankAmount}
                                            />
                                            <TextInput
                                                name="bankAccount"
                                                type='number'
                                                required={true}
                                                placeholder="Account Number"
                                                icon={<i class="fas fa-digital-tachograph"></i>}
                                                onChange={this.onChange}
                                                value={this.state.bankAccount}
                                            />
                                            <TextInput
                                                name="bankBranch"
                                                type='text'
                                                required={true}
                                                placeholder="Branch Name"
                                                icon={<i class="fas fa-university"></i>}
                                                onChange={this.onChange}
                                                value={this.state.bankBranch}
                                            />
                                            <button
                                                type="submit"
                                                className={`${"btn float-right"} ${styles.depositButtons}`}
                                            >
                                                Send
                                            </button>
                                        </form>
                                    </div>
                                </div>
                                <div className="collapse mt-3" id="cash">
                                    <div className="card card-body">
                                        <p>Bithela Limited</p>
                                        <p>Ground Floor, Roshanmaer Place, Lenana Road</p>
                                        <form onSubmit={this.onCashSubmit}>
                                            <TextInput
                                                name="cashAmount"
                                                type='number'
                                                required={true}
                                                placeholder="Enter Amount"
                                                icon='USD'
                                                onChange={this.onChange}
                                                value={this.state.cashAmount}
                                            />
                                            <button
                                                type="submit"
                                                className={`${"btn float-right"} ${styles.depositButtons}`}
                                            >
                                                Send
                                            </button>
                                        </form>

                                    </div>
                                </div>
                            </div>
                        ) : (
                                <div>
                                    <div className="collapse mt-3" id="bank">
                                        <div className="card card-body">
                                            <h5>Bank</h5>

                                            <form onSubmit={this.onBankSubmit}>
                                                <TextInput
                                                    name="bankAmount"
                                                    type='number'
                                                    required={true}
                                                    placeholder="Enter Amount"
                                                    icon='USD'
                                                    onChange={this.onChange}
                                                    value={this.state.bankAmount}
                                                />
                                                <TextInput
                                                    name="bankAccount"
                                                    type='number'
                                                    required={true}
                                                    placeholder="Account Number"
                                                    icon={<i class="fas fa-digital-tachograph"></i>}
                                                    onChange={this.onChange}
                                                    value={this.state.bankAccount}
                                                />
                                                <TextInput
                                                    name="bankBranch"
                                                    type='text'
                                                    required={true}
                                                    placeholder="Branch Name"
                                                    icon={<i class="fas fa-university"></i>}
                                                    onChange={this.onChange}
                                                    value={this.state.amount}
                                                />
                                                <button
                                                    type="submit"
                                                    className={`${"btn float-right"} ${styles.depositButtons}`}
                                                >
                                                    Send
                                            </button>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="collapse mt-3" id="cash">
                                        <div className="card card-body">
                                            <h5>Cash</h5>
                                            <p>You can collect your cash from our office</p>
                                            <p>AHA Tower, 4th Floor, </p>
                                            <p>Plot 7, Nakasero-Lourdel Rd. </p>
                                            <form onSubmit={this.onCashSubmit}>
                                                <TextInput
                                                    name="cashAmount"
                                                    type='number'
                                                    required={true}
                                                    placeholder="Enter Amount"
                                                    icon='USD'
                                                    onChange={this.onChange}
                                                    value={this.state.cashAmount}
                                                />
                                                <button
                                                    type="submit"
                                                    className={`${"btn float-right"} ${styles.depositButtons}`}
                                                >
                                                    Send
                                            </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            )}
                    </div>

                </div>

            </div>
        )
    }
}

export default connect(StateToProps, actions)(withRouter(CashWithdraw));
