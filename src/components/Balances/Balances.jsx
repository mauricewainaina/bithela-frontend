import React, { Component } from 'react'
import { connect } from "react-redux";

import PageLayout from '../Nav/PageLayout/PageLayout'
import Bitcoin from '../../app/assets/svg/Bitcoin.svg'
import UsdT from '../../app/assets/img/aud.svg'

import Ethereum from '../../app/assets/img/ethereum.png'
// import Aion from '../../app/assets/img/AION.jpg'
import styles from './Balances.module.css'

import { getBalance } from '../../app/store/actions/balanceActions'

const actions = {
    getBalance
}

const stateToProps = (state) => ({
    auth: state.auth,
    balance: state.balance
})



class Balances extends Component {

    constructor(props) {
        super(props)
        this.state = {
            balance: []
        }
    }

    componentDidMount() {
        this.props.getBalance(this.props.auth.loggedInUser.phoneNumber)

    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            balance: nextProps.balance.balance
        })
    }






    render() {
        const { balance } = this.props.balance

        let userBalance = balance.map(currency => {
            let icon;
            if (currency.symbol === 'ETH') {
                icon = <img src={Ethereum} width='25' className='mr-4' alt='eth' />
            } else if (currency.symbol === 'BTC') {
                icon = <img src={Bitcoin} width='25' className='mr-4' alt='eth' />
            } else if (currency.symbol === 'USD') {
                icon = <img src={UsdT} width='25' className='mr-4' alt='eth' />
            }
            return (
                <tbody>
                    <tr>
                        <td scope="row"> {icon} {currency.symbol}</td>
                        <td>{currency.amount}</td>
                        <td>{currency.usd}</td>
                    </tr>
                </tbody>
            )
        })
        return (
            <div>
                <PageLayout>
                    <div className='container'>
                        <div className='row my-4'>
                            <div className='col-sm-12 d-flex justify-content-between'>
                                <h5 className={`${'mr-auto'} ${styles.BalancesTitle}`}>BALANCES</h5>
                            </div>
                        </div>
                        <div className={[styles.historyWrap, "jumbotron", "box-shadow mb-5"].join(" ")}>
                            <table className="table">
                                <thead>
                                    <tr className={styles.table_Heading}>
                                        <th scope="col">Symbol</th>
                                        <th scope="col">Amount</th>
                                        <th scope="col">USD</th>
                                    </tr>
                                </thead>
                                {userBalance}
                            </table>
                        </div>
                    </div>
                </PageLayout>
            </div>
        )
    }
}

export default connect(stateToProps, actions)(Balances);
