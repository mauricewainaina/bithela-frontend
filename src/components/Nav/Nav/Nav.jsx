import React, { Component } from 'react'
// import Sidebar from "react-sidebar";
import { connect } from "react-redux";

import { Link } from "react-router-dom";
import styles from './Nav.module.css'
import { logoutUser } from '../../../app/store/actions/authActions'



const actions = {
  logoutUser
}

const StateToProps = (state) => ({
  auth: state.auth,
})

class Nav extends Component {

  constructor(props) {
    super(props);
    this.state = {
      // sidebarOpen: true
    };
  }

  onLogout = (e) => {
    e.preventDefault();
    this.props.logoutUser()
}

  render() {
    const { loggedInUser } = this.props.auth
    return (
      <div>
        <nav className={`${'navbar navbar-expand-lg navbar-light bg-light'} ${styles.Toolbar}`}>
          <a className={`${"navbar-brand"} ${styles.Logo}`} href="/">Bithela</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active ml-4">
                {/* <a className="nav-link" href="#">Buy / Sell <span className="sr-only">(current)</span></a> */}
                <Link className='nav-link' to='/exchange'>Buy / Sell</Link>
              </li>
              <li className="nav-item ml-4">
                <Link className='nav-link ' to='/balances'>Balances</Link>
              </li>
              <li className="nav-item ml-4 ">
                <Link className='nav-link' to='/deposit'>Deposit</Link>
              </li>
              <li className="nav-item ml-4">
                <Link className='nav-link' to='/withdraw'>Withdraw</Link>
              </li>
            </ul>

            <ul className="navbar-nav">
              <div className={styles.Help}>
                <a  href="#">Hi {loggedInUser.firstName}</a>
              </div>
              <div className={styles.Help}>
                <a  href="#"  onClick={this.onLogout}>Logout</a>
              </div>

            </ul>
          </div>
        </nav>
      </div>
    )
  }
}



//  <header className={styles.Toolbar}>

// </header>
// <div className={styles.SideDrawer}>
//   <div role='button' tabIndex='0' className={styles.SideDrawer_CancelIcon}>
//   <svg width="64" height="64" viewBox="0 0 64 64" enableBackground="new 0 0 64 64">
//     <g>
//       <path fill="#fff" d="M28.941,31.786L0.613,60.114c-0.787,0.787-0.787,2.062,0,2.849c0.393,0.394,0.909,0.59,1.424,0.59  
//             c0.516,0,1.031-0.196,1.424-0.59l28.541-28.541l28.541,28.541c0.394,0.394,0.909,0.59,1.424,0.59c0.515,0,1.031-0.196,1.424-0.59  
//               c0.787-0.787,0.787-2.062,0-2.849L35.064,31.786L63.41,3.438c0.787-0.787,0.787-2.062,0-2.849c-0.787-0.786-2.062-0.786-2.848,0  
//               L32.003,29.15L3.441,0.59c-0.787-0.786-2.061-0.786-2.848,0c-0.787,0.787-0.787,2.062,0,2.849L28.941,31.786z">
//       </path>
//     </g>
//   </svg>

//   </div>

//   <div role='button' tabIndex='0'>
//     <ul className={styles.NavigationItems}>
//       <div className={styles.NavigationItem_Username}>
//         <div className={styles.UserName_Icon}>
//           Image
//         </div>

//         <span className={styles.UserName}>
//           <a href="http://">John Bravo</a>
//         </span>
//       </div>

//       <div className={styles.NavigationItem.BalanceIndicator}>
//         <div className={styles.BalanceIndicator}>

//         </div>
//       </div>

//     </ul>
//   </div>
// </div> 


export default connect(StateToProps, actions)(Nav);
