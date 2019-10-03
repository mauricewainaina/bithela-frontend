import React, { Component } from 'react'
import { connect } from "react-redux";
import Moment from 'react-moment';


import Spinner from '../../../app/common/Spinner'
import { exchangeHistory } from '../../../app/store/actions/ExchangeActions'
import styles from "../../Deposit/History/History.module.css";

const actions = {
  exchangeHistory
}

const stateToProps = (state) => ({
  auth: state.auth,
  balance: state.balance,
  exchange: state.exchange
})



class ExchangeHistory extends Component {
  constructor(props) {
    super(props)
    this.state = {
      history: []
    }
  }

  componentDidMount() {
    this.props.exchangeHistory(this.props.auth.loggedInUser.phoneNumber)

  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      history: nextProps.exchange.history
    });
  }


  render() {
    const { history } = this.props.exchange

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
                  {item.pair}
                </td>
                <td>{item.qty}</td>
                <td><Moment format="DD/MM/YYYY hh:mm">{item.createdAt}</Moment></td>
                <td>{item.side}</td>
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
        <h1 className={[styles.history]}>Order History</h1>
        <table class="table">
          <thead>
            <tr className={styles.table_Heading}>
              <th scope="col">Pair</th>
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

export default connect(stateToProps, actions)(ExchangeHistory);
