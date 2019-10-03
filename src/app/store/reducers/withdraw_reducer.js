import { WiTHDRAW_HISTORY, WITHDRAW_HISTORY } from "../actions/types";

const initialState = {
  coin: "bitcoin",
  address: "",
  history: null
};
const withdrawReducer = (state = initialState, action) => {
  switch (action.type) {
    case WITHDRAW_HISTORY:
      return {
        ...state,
        history: action.payload
      }
    default:
      return state;
  }
}

export default withdrawReducer;
