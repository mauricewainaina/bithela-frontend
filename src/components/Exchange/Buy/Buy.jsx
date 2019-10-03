import React, { Component } from 'react'
import { connect } from "react-redux";
import axios from 'axios'
import { Link, withRouter } from "react-router-dom";


import { coinOrder } from '../../../app/store/actions/ExchangeActions'


import BTC from '../../../app/assets/img/BTC.png'
import ETH from '../../../app/assets/img/ETH.png'
import Checked from '../../../app/assets/img/checked.png'

import styles from '../Exchange.module.css'
import SelectInput from '../../../app/common/form/SelectInput'
import TextInput from "../../../app/common/form/TextInput";



const actions = {
    coinOrder
}

const StateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
})


class Buy extends Component {
    state = {
        coinToBuy: '',
        buyFrom: '',
        amount: '',
        phoneNumber: '',
        pairValue: '',
        cost: ''
    }

    onCoinToBuy = ({ target }) => {
        this.setState({
            coinToBuy: target.value,
            pairValue: ''
        })
    }

    onBuyFrom = ({ target }) => {
        this.setState({ [target.name]: target.value }, () => {
            axios.get(`https://backend.bithela.com/api/trade/ticker/${this.state.coinToBuy}${this.state.buyFrom}`)
                .then(res => {
                    this.setState({
                        pairValue: res.data.price
                    })
                })
        })
    }

    onAmount = ({ target }) => {
        const { pairValue, } = this.state
        this.setState({
            amount: target.value,
            cost: target.value * pairValue
        })
    }

    onTotal = ({target}) => {
        const { pairValue, } = this.state
        this.setState({
            cost: target.value,
            amount: target.value/pairValue
        })
    }

    onSubmit = (e) => {
        e.preventDefault();

        const userData = {
            phoneNumber: this.props.auth.loggedInUser.phoneNumber,
            symbol: this.state.coinToBuy + '-' + this.state.buyFrom,
            side: 'BUY',
            qty: this.state.amount,
        }
        this.props.coinOrder(userData, this.props.history)
    }

    render() {
        const coinToBuyOptions = [
            { label: '* Select Coin To Buy', value: 0 },
            { value: "BTC", label: "Bitcoin" },
            { value: "ETH", label: "Ethereum" },

        ]
        const bitcoinOptions = [
            { label: '* Select Currency', value: 0 },
            { value: "USDT", label: "USD" }

        ]
        const ethOptions = [
            { label: '* Select Currency', value: 0 },
            { value: "BTC", label: "Bitcoin" },
            { value: "USDT", label: "USD" },

        ]

        const { coinToBuy } = this.state


        return (
            <div className='container'>
                <form action="" onSubmit={this.onSubmit}>
                    <div className='px-3'>
                        <p>Specify the currencies that you want to buy</p>
                        <div className=''>
                            <SelectInput
                                name='coinToBuy'
                                value={this.state.coinToBuy}
                                options={coinToBuyOptions}
                                onChange={this.onCoinToBuy}
                                info="Coin To Buy"

                            />
                        </div>

                        <div className=''>
                            {coinToBuy === 'BTC' ? (
                                <div>
                                    <SelectInput
                                        name='buyFrom'
                                        value={this.state.buyFrom}
                                        options={bitcoinOptions}
                                        onChange={this.onBuyFrom}
                                        info="Choose Currency"

                                    />
                                    {this.state.pairValue ? (
                                        <span>1 {this.state.coinToBuy} = {this.state.pairValue} {this.state.buyFrom}</span>
                                    ) : (<span> </span>)}
                                </div>
                            ) : (
                                    <div>
                                        <SelectInput
                                            name='buyFrom'
                                            value={this.state.buyFrom}
                                            options={ethOptions}
                                            onChange={this.onBuyFrom}
                                            info="Choose Currency"

                                        />
                                        {this.state.pairValue ? (
                                            <span>1 {this.state.coinToBuy} = {this.state.pairValue} {this.state.buyFrom} </span>
                                        ) : (<span> </span>)}
                                    </div>

                                )}
                        </div>

                    </div>
                    <div className='px-3'>
                        <div className=''>
                            <input
                                type="number"
                                name='amount'
                                value={this.state.amount}
                                onChange={this.onAmount}
                                className="form-control"
                                id="exampleInputPassword1"
                                placeholder={`${'0.00'} ${this.state.coinToBuy}`}
                            />
                            <span> Enter Amount</span>

                        </div>
                        <div className='mt-2'>
                            <input
                                type="number"
                                value={this.state.cost}
                                onChange={this.onTotal}
                                className="form-control"
                                id="exampleInputPassword1"
                                placeholder="Cost"
                            // disabled={true}
                            />
                            <span>Total</span>
                        </div>

                    </div>
                    <div className='row mt-4'>
                        <div className='col-xs-12 m-auto'>
                            <button type="submit" className={`${"btn btn-sm"} ${styles.Buy_Button}`}>Buy {this.state.coinToBuy}</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default connect(StateToProps, actions)(withRouter(Buy))
