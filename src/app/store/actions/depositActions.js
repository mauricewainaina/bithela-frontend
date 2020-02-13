import axios from 'axios'
import { toastr } from "react-redux-toastr";
 
import {  DEPOSIT_HISTORY } from './types'


const url = 'https://backend.bithela.com'



export const verifyTransaction = (data, history) => dispatch => {
    axios.post(`${url}/api/trade/deposit/crypto/verify`, data)
        .then(res => {
            history.push('/balances')
            toastr.success('Success', 'Deposit Succesfull')
        })
        .catch(e => console.log(e))
}

export const cashDeposit = (data, history) => dispatch => {
    axios.post(`${url}/api/trade/deposit/cash/stk`, data)
        .then(res => {
            // dispatch(openModal('CashDepositModal'))
            history.push('/balances')
            toastr.success('Success', res.data.details.message) 
            console.log('Resolve', res.data.details.message)
        })
        .catch(e => console.log('Error', e.response.data))
}

export const depositHistory = (phoneNumber, history) => dispatch => {
    axios.get(`${url}/api/trade/deposit/history/${phoneNumber}`)
        .then(res => 
            dispatch({
                type: DEPOSIT_HISTORY,
                payload: res.data.history
            })    
        )
}