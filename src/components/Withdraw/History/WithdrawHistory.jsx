import React, { Component } from 'react'
import { connect } from "react-redux";
import Moment from 'react-moment';


import Spinner from '../../../app/common/Spinner'
import { withdrawHistory } from '../../../app/store/actions/withdrawActions'
import styles from "../../Deposit/History/History.module.css";

const actions = {
  withdrawHistory
}

const stateToProps = (state) => ({
  auth: state.auth,
  balance: state.balance,
  withdraw: state.withdraw
})



class WithdrawHistory extends Component {
  constructor(props) {
    super(props)
    this.state = {
      history: []
    }
  }

  componentDidMount() {
    this.props.withdrawHistory(this.props.auth.loggedInUser.phoneNumber)

  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      history: nextProps.withdraw.history
    });
  }


  render() {
    const { history } = this.props.withdraw
    console.log(history)


    let historyItems;
    if (history === null) {
      historyItems = <Spinner />
    } else {

      if (history.length >= 0) {
        historyItems = (
          history.map(item => (
            <tbody>
              <tr>
                <td scope="row">
                  <div className={styles.Round_Dot}></div>
                  {item.symbol}
                </td>
                <td>{item.amount}</td>
                <td><Moment format="DD/MM/YYYY hh:mm">{item.createdAt}</Moment></td>
                <td>{item.status}</td>
              </tr>

            </tbody>
          ))
        )
      } else {
        historyItems = 'Nothing'
      }
    }
    return (
      <div className={[styles.historyWrap, "jumbotron", "box-shadow mb-5"].join(" ")}>
        <h1 className={[styles.history]}>Withdraw History</h1>
        <table class="table">
          <thead>
            <tr className={styles.table_Heading}>
              <th scope="col">Symbol</th>
              <th scope="col">Amount</th>
              <th scope="col">Date</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          {historyItems}
        </table>

      </div>
    );
  }

};

export default connect(stateToProps, actions)(WithdrawHistory);
