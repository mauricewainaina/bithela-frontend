import React, { Suspense, lazy } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import PrivateRoute from "../utils/PrivateRoute";
import ModalManger from "../../components/Modals/ModalManager";
import Spinner from "../common/Spinner";
import ErrorBoundary from "../common/ErrorBoundary";

// const Landing = lazy(() => import("../../components/Landing/Landing"));
// const Register = lazy(() => import("../../components/Auth/Register/Register"));
// const DepositCrypto = lazy(() =>
//   import("../../components/Deposit/DepositCrypto")
// );
// const Exchange = lazy(() => import("../../components/Exchange/Exchange"));
// const Login = lazy(() => import("../../components/Auth/Login/Login"));
// const Verify = lazy(() => import("../../components/Auth/Verify/Verify"));
// const Balances = lazy(() => import("../../components/Balances/Balances"));
// const Withdraw = lazy(() => import("../../components/Withdraw/Withdraw"));
// const ForgotPassword = lazy(() =>
//   import("../../components/Auth/PasswordReset/ForgotPassword")
// );
// const ResetPassword = lazy(() =>
//   import("../../components/Auth/PasswordReset/ResetPassword")
// );
// const Landing = lazy(() => import('../../components/Landing/Landing'));

import Landing from "../../components/Landing/Landing";
import Register from "../../components/Auth/Register/Register";
import DepositCrypto from "../../components/Deposit/DepositCrypto";
import Exchange from "../../components/Exchange/Exchange";
import Login from "../../components/Auth/Login/Login";
import Verify from "../../components/Auth/Verify/Verify";
import Balances from '../../components/Balances/Balances'
import Withdraw from "../../components/Withdraw/Withdraw";
import ForgotPassword from "../../components/Auth/PasswordReset/ForgotPassword";
import ResetPassword from "../../components/Auth/PasswordReset/ResetPassword";

function App() {
  return (
    <BrowserRouter>
      <ModalManger />
      <Route exact path="/" component={Landing} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/verify" component={Verify} />
      <Route exact path="/forgotpassword" component={ForgotPassword} />
      <Route exact path="/resetpassword" component={ResetPassword} />
      <Switch>
        <PrivateRoute exact path="/deposit" component={DepositCrypto} />
      </Switch>
      <Switch>
        <PrivateRoute exact path="/balances" component={Balances} />
      </Switch>
      <Switch>
        <PrivateRoute exact path="/exchange" component={Exchange} />
      </Switch>
      <Switch>
        <PrivateRoute exact path="/withdraw" component={Withdraw} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
