import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PrivateRoute from '../utils/PrivateRoute'

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
import ModalManger from '../../components/Modals/ModalManager'

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
        <PrivateRoute exact path='/balances' component={Balances} />
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
