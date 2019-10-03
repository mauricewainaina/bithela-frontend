import { GET_BALANCE } from './types'
import axios from 'axios'

const url = 'https://backend.bithela.com'



// Get User Balances
export const getBalance =  (phoneNumber, history) => dispatch => {
    axios.get(`${url}/api/users/balances/${phoneNumber}`)
        .then(res => 
            dispatch({
                type: GET_BALANCE,
                payload: res.data.details
            })    
        )
}