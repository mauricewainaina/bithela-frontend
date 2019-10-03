import { EXCHANGE_HISTORY } from "../actions/types";

const initialState = {
  
  history: null
};
const exchangeReducer = (state = initialState, action) => {
  switch (action.type) {
    case EXCHANGE_HISTORY:
      return {
        ...state,
        history: action.payload
      }
    default:
      return state;
  }
}

export default exchangeReducer;
