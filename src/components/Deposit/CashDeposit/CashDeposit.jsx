import React, { Component } from 'react'
import axios from 'axios'
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import TextInput from "../../../app/common/form/TextInput";
import SelectInput from '../../../app/common/form/SelectInput'
import styles from "../DepositCrypto.module.css";

import { cashDeposit } from '../../../app/store/actions/depositActions'



const StateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
})

const actions = {
    cashDeposit
}

class CashDeposit extends Component {
    state = {
        selectedCurrency: 'KES',
        phoneNumber: '',
        amount: '',
        exrate: '',

    };

    componentDidMount() {
        this.setState({
            phoneNumber: this.props.auth.loggedInUser.phoneNumber
        })
        axios.get(`https://backend.bithela.com/api/trade/forex/usd/rate/KES`)
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

            axios.get(`https://backend.bithela.com/api/trade/forex/usd/rate/${symbol}`)
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

    onSubmit = (e) => {
        e.preventDefault();
        const data = {
            phoneNumber: this.state.phoneNumber,
            amount: this.state.amount,
            currency: this.state.selectedCurrency,
            exrate: this.state.exrate
        };

        this.props.cashDeposit(data, this.props.history)
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
                <p className="mb-0">Select Deposits Currency</p>
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
                        <h4 className={styles.important}>Deposit Guide </h4>
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

                                        <form onSubmit={this.onSubmit}>
                                            <TextInput
                                                name="amount"
                                                type='number'
                                                required={true}
                                                placeholder="Enter Amount"
                                                icon='KES'
                                                onChange={this.onChange}
                                                value={this.state.amount}
                                            />
                                            <button
                                                type="submit"
                                                className={`${"btn float-right"} ${styles.depositButtons}`}
                                            >
                                                Deposit
                                            </button>
                                        </form>

                                        <p>Or send money to our paybill</p>
                                        <p>Bithela Paybill - 662270</p>
                                    </div>
                                </div>
                                <div className="collapse mt-3" id="bank">
                                    <div className="card card-body">
                                        <p>For direct deposits</p>
                                        <p>Account Number - 1450278875708 - </p>
                                        <p>Branch - Kilimani</p>
                                    </div>
                                </div>
                                <div className="collapse mt-3" id="cash">
                                    <div className="card card-body">
                                        <p>Bithela Limited</p>
                                        <p>Ground Floor, Roshanmaer Place, Lenana Road</p>
                                        <p> </p>
                                    </div>
                                </div>
                            </div>
                        ) : (
                                <div>
                                    <div className="collapse mt-3" id="bank">
                                        <div className="card card-body">
                                            <p>For direct deposits</p>
                                            <p>Acount Name - Bithela Company Limited</p>
                                            <p>Acount Number - 9030016172145 (UGX)</p>
                                            <p>Acount Number - 90300161721102 (USD)</p>
                                            <p>Branch - GARDEN CITY</p>
                                        </div>
                                    </div>
                                    <div className="collapse mt-3" id="cash">
                                        <div className="card card-body">
                                            <p>You can deposit your cash at our office</p>
                                            <p>AHA Tower, 4th Floor, </p>
                                            <p>Plot 7, Nakasero-Lourdel Rd. </p>
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

export default connect(StateToProps, actions)(withRouter(CashDeposit));
