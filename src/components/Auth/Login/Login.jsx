import React, { Component } from 'react'
import { Link, withRouter } from "react-router-dom";
import axios from 'axios'
import { connect } from "react-redux";
import ReactPhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/dist/style.css'


import { loginUser, resendOTP } from '../../../app/store/actions/authActions'
import TextInput from '../../../app/common/form/TextInput'
import styles from '../Register/register.module.css'

const actions = {
    loginUser,
    resendOTP
}

const StateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
})

const phoneStyle = {
    width: '100%',
    height: '39px'
}

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            phoneNumber: '',
            password: '',
            loading: false,
            errors: {},
            notVerified: ''
        }
    }

    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            this.props.history.push('/deposit')
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push('/deposit')
        }
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors.details }, () => {
                if (nextProps.errors.details.verified === false) {
                    // this.props.history.push('/verify')
                    console.log(nextProps.errors.details.verified)
                    const userData = {
                        phoneNumber: localStorage.getItem('phoneNumber')
                    }
                    this.props.resendOTP(userData, this.props.history)
                    console.log(userData)
                }
            })
        }
    }



    onChange = ({ target }) => {
        this.setState({ [target.name]: target.value })
        // localStorage.setItem('email', this.state.email)
    }

    phoneOnChange = (value) => {
        this.setState({ phoneNumber: value })
        localStorage.setItem('phoneNumber', value)
    }

    onSubmit = (e) => {
        e.preventDefault();

        const userData = {
            phoneNumber: this.state.phoneNumber,
            password: this.state.password,
        }
        this.props.loginUser(userData, this.props.history)
    }
    render() {
        const { errors } = this.state;
        return (
            <div className={`${styles.register}`}>
                <div >
                    <div className={`${"row"} ${styles.noGutter}`}>
                        <div className={`${"col-lg-7"} ${styles.register_right}`}>
                            <div className={`${styles.heading} ${"mt-5"}`}>
                                <h1 className='display-4'><span>Welcome to</span> <span>Bithela</span></h1>
                                <h5>Login to access your account</h5>
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
                                        <TextInput
                                            name="password"
                                            type="password"
                                            placeholder='Password'
                                            value={this.state.password}
                                            onChange={this.onChange}
                                            required={true}
                                            error={errors.password || errors.phoneNumber || errors.message}
                                            icon={<i className="fas fa-lock"></i>}
                                        />

                                        <div className='row'>
                                            <div className='col'>
                                                <p><Link to='forgotpassword' className={styles.Link}>Forgot Password?</Link></p>
                                                <p>Not on Bithela yet? <Link to='register' className={styles.Link}>Register</Link></p>
                                            </div>
                                            <div>
                                                <button type="submit" className={`${"btn float-right"} ${styles.registerButton}`}>Login</button>
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

export default connect(StateToProps, actions)(Login);
