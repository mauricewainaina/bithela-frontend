import { DEPOSIT, DEPOSIT_HISTORY } from "../actions/types";

const initialState = {
  coin: "bitcoin",
  address: "",
  history: null
};
const depositReducer = (state = initialState, action) => {
  switch (action.type) {
    case DEPOSIT_HISTORY:
      return {
        ...state,
        history: action.payload
      }
    default:
      return state;
  }
}

export default depositReducer;
