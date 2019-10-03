import React, { Component } from 'react'
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import ReactPhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/dist/style.css'


import { forgotPassword } from '../../../app/store/actions/authActions'
import TextInput from '../../../app/common/form/TextInput'
import styles from '../Register/register.module.css'

const actions = {
    forgotPassword
}

const StateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
})

const phoneStyle = {
    width: '100%',
    height: '39px'
}

class ForgotPassword extends Component {

    constructor(props) {
        super(props);
        this.state = {
            phoneNumber: '+',
        }
    }
    

    onChange = ({ target }) => {
        this.setState({ [target.name]: target.value })
        // localStorage.setItem('email', this.state.email)
    }

    phoneOnChange = (value) => {
        this.setState({ phoneNumber: value })
        localStorage.setItem('phoneNumber', this.state.phoneNumber)
    }

    onSubmit = (e) => {
        e.preventDefault();

        const userData = {
            phoneNumber: this.state.phoneNumber,
        }
        this.props.forgotPassword(userData, this.props.history)
        console.log(userData);
    }
    render() {
        const { errors } = this.state;
        return (
            <div className={`${styles.register}`}>
                <div >
                    <div className={`${"row"} ${styles.noGutter}`}>
                        <div className={`${"col-lg-7"} ${styles.register_right}`}>
                            <div className={`${styles.heading} ${"mt-5"}`}>
                                <h1 className='display-4'><span>Forgot Password</span></h1>
                                {/* <h5>Forgot Password</h5> */}
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className='container mt-5 px-5'>
                                <h5 className={styles.formTitle}>Bithela</h5>
                                <div>
                                    <form onSubmit={this.onSubmit}>
                                        <ReactPhoneInput
                                            defaultCountry={'ke'}
                                            onlyCountries={['ke', 'ug']}
                                            value={this.state.phoneNumber}
                                            onChange={this.phoneOnChange}
                                            inputStyle={phoneStyle}
                                            containerStyle={{ marginBottom: '3%' }}
                                            inputExtraProps={{
                                                required: true
                                            }}
                                        // placeholder={'Phone Number'}
                                        />
                                        <div className='row'>
                                            {/* <div className='col'>
                                                <p>Forgot Password?</p>
                                                <p>Not on Bithela yet? <Link to='register' className={styles.Link}>Register</Link></p>
                                            </div> */}
                                            <div className='col'>
                                                <button type="submit" className={`${"btn float-right"} ${styles.registerButton}`}>Send Code</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(StateToProps, actions)(ForgotPassword);
