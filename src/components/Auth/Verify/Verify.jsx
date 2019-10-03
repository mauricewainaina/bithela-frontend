import React, { Component } from 'react'
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { verifyUser, resendOTP } from "../../../app/store/actions/authActions";



import TextInput from '../../../app/common/form/TextInput'
import styles from '../Register/register.module.css'


const actions = {
    verifyUser,
    resendOTP
}

const stateToProps = state => ({
    auth: state.auth,
    errors: state.errors
})


class Verify extends Component {

    constructor(props) {
        super(props);
        this.state = {
            code: '',
            phoneNumber: '',
            errors: {}
        }
    }

    componentDidMount() {
        this.setState({
            phoneNumber: this.props.auth.registeredUser || localStorage.getItem('phoneNumber')
        })
    }


    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors.details });
        }
    }



    onChange = ({ target }) => {
        this.setState({ [target.name]: target.value })
    }

    onSubmit = (e) => {
        e.preventDefault();

        const data = {
            phoneNumber: this.state.phoneNumber,
            otp: this.state.code
            //  this.state.code
        }

        this.props.verifyUser(data, this.props.history)
        console.log(data)

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
                                <h5>Verify to access your account</h5>
                            </div>

                        </div>
                        <div className="col-lg-5">
                            <div className='container mt-5 px-5'>
                                <h5 className={styles.formTitle}>Bithela</h5>
                                <div>
                                    <form onSubmit={this.onSubmit}>
                                        <h2 className={styles.smsHeading}>SMS AUTHENTIFICATION</h2>
                                        <TextInput
                                            name="code"
                                            value={this.state.code}
                                            onChange={this.onChange}
                                            placeholder='Enter your SMS code'
                                            error={errors.phoneNumber}
                                            icon={<i className="fas fa-lock"></i>}
                                        />


                                        <div className='row'>
                                            <div className='col'>
                                                <p>Resend SMS code</p>
                                            </div>
                                            <div>
                                                <button type="submit" className={`${"btn float-right"} ${styles.registerButton}`}>Verify</button>
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

export default connect(stateToProps, actions)(withRouter(Verify));
