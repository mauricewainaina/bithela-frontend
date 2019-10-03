import React, { Component } from 'react'
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import ReactPhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/dist/style.css'


import { forgotPasswordVerify } from '../../../app/store/actions/authActions'
import TextInput from '../../../app/common/form/TextInput'
import styles from '../Register/register.module.css'

const actions = {
    forgotPasswordVerify
}

const StateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
})

const phoneStyle = {
    width: '100%',
    height: '39px'
}

class ResetPassword extends Component {

    constructor(props) {
        super(props);
        this.state = {
            phoneNumber: '',
            password: '',
            otp: '',
            errors: {}
        }
    }
    

    onChange = ({ target }) => {
        this.setState({ [target.name]: target.value })
        // localStorage.setItem('email', this.state.email)
    }

    phoneOnChange = (value) => {
        this.setState({ phoneNumber: value })
        // localStorage.setItem('phoneNumber', this.state.phoneNumber)
    }

    onSubmit = (e) => {
        e.preventDefault();

        const userData = {
            phoneNumber: this.state.phoneNumber,
            password: this.state.password,
            otp: this.state.otp
        }
        this.props.forgotPasswordVerify(userData, this.props.history)
    }
    render() {
        const { errors } = this.state;
        return (
            <div className={`${styles.register}`}>
                <div >
                    <div className={`${"row"} ${styles.noGutter}`}>
                        <div className={`${"col-lg-7"} ${styles.register_right}`}>
                            <div className={`${styles.heading} ${"mt-5"}`}>
                                <h1 className='display-4'><span>Reset Password</span></h1>
                                {/* <h5>Reset Password</h5> */}
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
                                            placeholder='New Password'
                                            value={this.state.password}
                                            onChange={this.onChange}
                                            required={true}
                                            error={errors.password}
                                            icon={<i className="fas fa-lock"></i>}
                                        />
                                        <TextInput
                                            name="otp"
                                            type="text"
                                            placeholder='Enter your SMS code'
                                            value={this.state.otp}
                                            onChange={this.onChange}
                                            required={true}
                                            error={errors.password}
                                            icon={<i className="fas fa-lock"></i>}
                                        />
                                        <div className='row'>
                                            {/* <div className='col'>
                                                <p>Forgot Password?</p>
                                                <p>Not on Bithela yet? <Link to='register' className={styles.Link}>Register</Link></p>
                                            </div> */}
                                            <div className='col'>
                                                <button type="submit" className={`${"btn float-right"} ${styles.registerButton}`}>Change Password</button>
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

export default connect(StateToProps, actions)(ResetPassword);
