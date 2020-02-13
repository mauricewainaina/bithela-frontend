import React, { Component } from 'react'
import { connect } from "react-redux";
import Moment from 'react-moment';


import Spinner from '../../../app/common/Spinner'
import { depositHistory } from '../../../app/store/actions/depositActions.js'
import styles from "./History.module.css";

const actions = {
  depositHistory
}

const stateToProps = (state) => ({
  auth: state.auth,
  balance: state.balance,
  deposit: state.deposit
})



class DepositHistory extends Component {
  constructor(props) {
    super(props)
    this.state = {
      history: []
    }
  }

  componentDidMount() {
    this.props.depositHistory(this.props.auth.loggedInUser.phoneNumber)

  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      history: nextProps.deposit.history
    });
  }


  render() {
    const { history } = this.props.deposit

    let historyItems;
    if (history === null) {
      historyItems = <Spinner />
    } else {
      if (history.length >= 0) {
        historyItems = (
          history.map(item => (
            <tbody key={item.symbol}>
              <tr>
                <td>
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
        <h1 className={[styles.history]}>Deposit History</h1>
        <table className={[styles.historyTable, "table"].join(" ")}>
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

export default connect(stateToProps, actions)(DepositHistory);
