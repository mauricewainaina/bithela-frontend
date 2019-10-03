import React from "react";
import ReactDOM from "react-dom";
import ReduxToastr from 'react-redux-toastr'
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'
import "./index.css";
import App from "./app/layout/App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import jwt_decode from 'jwt-decode';

// import 'bootstrap/dist/css/bootstrap.min.css';
import { setCurrentUser, logoutUser } from "./app/store/actions/authActions";
import setAuthToken from './app/utils/setAuthToken';
import store from "./app/store/";

// check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and expiration
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded))

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
      // logout user
      store.dispatch(logoutUser())
      // Clear current profile
      // store.dispatch(clearCurrentProfile)
      // Redirect to login
      window.location.href = '/'
  }
}

ReactDOM.render(
  <Provider store={store}>
    <ReduxToastr
      timeOut={5000}
      position='top-right'
      transitionIn='bounceIn'
      transitionOut='bounceOut'
    />
    <App />
  </Provider>,
  document.getElementById("root")    
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
