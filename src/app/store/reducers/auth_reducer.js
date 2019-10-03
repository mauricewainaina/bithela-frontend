import { SIGN_UP, LOGIN, SET_CURRENT_USER } from "../actions/types";
import isEmpty from '../../validation/is-empty'

const initialState = {
  registeredUser: {},
  isAuthenticated: false,
  loggedInUser: {}
};


export default function (state = initialState, action) {
  switch (action.type) {
    case SIGN_UP:
      return {
        ...state,
        registeredUser: action.payload
      }
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        loggedInUser: action.payload,
      }
    default:
      return state;
  }
}
