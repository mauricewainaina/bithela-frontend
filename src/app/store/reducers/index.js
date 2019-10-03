import { combineReducers } from "redux";
import { reducer as toastrReducer } from "react-redux-toastr";

import auth_reducer from "./auth_reducer";
import deposit_reducer from "./deposit_reducer";
import errors_reducer from "./errors_reducer";
import balance_reducer from './balance_reducer'
import withdraw_reducer from './withdraw_reducer'
import modal_reducer from './modal_reducer'
import exchange_reducer from './exchange_reducer'

export default combineReducers({
  auth: auth_reducer,
  deposit: deposit_reducer,
  withdraw: withdraw_reducer,
  balance: balance_reducer,
  exchange: exchange_reducer,
  errors: errors_reducer,
  modals: modal_reducer,
  toastr: toastrReducer,
});
