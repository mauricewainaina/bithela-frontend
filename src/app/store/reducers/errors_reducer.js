import { GET_ERRORS } from "../actions/types";

const intitialState = null

const errorsReducer = (state = intitialState, action) => {
    switch (action.type) {
        case GET_ERRORS:
            return action.payload
    
        default:
            return state;
    }
}

export default errorsReducer;