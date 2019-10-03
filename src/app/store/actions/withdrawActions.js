import axios from 'axios'
import { WITHDRAW_HISTORY } from './types'
import { openModal, closemodal } from '../actions/modalActions'
import { toastr } from "react-redux-toastr";


const url = 'https://backend.bithela.com'


// Withdraw Cash
export const withdrawCrypto = (data) => dispatch => {
    axios.post(`${url}/api/trade/withdraw/crypto`, data)
        .then(res => {
            dispatch(openModal('WithdrawModal'))
        }).catch(err => {
            toastr.error('Failed!', err.response.data.details.message)
        })
}
// Withdraw Cash
export const withdrawCash = (data) => dispatch => {
    axios.post(`${url}/api/trade/withdraw/cash`, data)
        .then(res => {
            dispatch(openModal('WithdrawModal'))
        }).catch(err => {
            toastr.error('Failed!', err.response.data.details.message)
        })
}


export const withdrawverify = (userData, history) => dispatch => {
    axios.post(`${url}/api/trade/withdraw/verify`, userData)
        .then(res => {
            toastr.success('Success!', res.data.details.message)
            history.push('/balances')
            dispatch(closemodal())
        }).catch(e => {
            toastr.error('Error!', 'Withdraw Not Successful')
            dispatch(closemodal())
        })
}


export const withdrawHistory = (phoneNumber, history) => dispatch => {
    axios.get(`${url}/api/trade/withdraw/history/${phoneNumber}`)
        .then(res =>
            dispatch({
                type: WITHDRAW_HISTORY,
                payload: res.data.history
            })
        )
}

