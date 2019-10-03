import  { GET_BALANCE } from '../actions/types'

const intitialState = {
    balance: []
}

const balanceReducer = (state = intitialState, action) => {
    switch (action.type) {
        case GET_BALANCE:
            return {
                ...state,
                balance: action.payload
            }
        default: 
            return state;
    }
}

export default balanceReducer
