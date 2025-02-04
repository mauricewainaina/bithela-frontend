import { GET_ERRORS, CLEAR_ERRORS } from "../actions/types";

const intitialState = null

const errorsReducer = (state = intitialState, action) => {
    switch (action.type) {
        case GET_ERRORS:
            return action.payload
        case CLEAR_ERRORS:
            return null
            
        default:
            return state;
    }
}

export default errorsReducer;