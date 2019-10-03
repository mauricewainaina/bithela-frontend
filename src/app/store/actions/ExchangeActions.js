import axios from 'axios'
import { toastr } from "react-redux-toastr";

import { EXCHANGE_HISTORY, GET_ERRORS } from "./types";


const url = 'https://backend.bithela.com'


// Buy Coin
export const coinOrder = (userData, history) => dispatch => {
    axios.post(`${url}/api/trade/order`, userData)
        .then(res => {
            toastr.success('Success!', 'Trade Succesfull')
            history.push('/balances')
        })
        .catch(err => {
            toastr.error('Failed!', err.response.data.details.message)
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        }

        )
}

// Exchange History
export const exchangeHistory = (phoneNumber, history) => dispatch => {
    axios.get(`${url}/api/trade/order/history/${phoneNumber}`)
        .then(res => 
            dispatch({
                type: EXCHANGE_HISTORY,
                payload: res.data.history
            })    
        )
}

