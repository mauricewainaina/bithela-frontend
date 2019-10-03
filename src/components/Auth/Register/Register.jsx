import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import ReactPhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/dist/style.css'

import { registerUser } from "../../../app/store/actions/authActions";

import TextInput from "../../../app/common/form/TextInput";
import styles from "./register.module.css";

const actions = {
  registerUser
};

const stateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

const phoneStyle = {
  width: '100%',
  height: '39px'
}


class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      password: "",
      errors: {}
    };
  }

  
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      // console.log('Errors are here')
      this.setState({ errors: nextProps.errors.details });
    }
  }

  onChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  phoneOnChange = (value) => {
    this.setState({ phoneNumber: value });
  }

  

  onSubmit = e => {
    e.preventDefault();

    const newUser = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      phoneNumber: this.state.phoneNumber,
      password: this.state.password
    };
    this.props.registerUser(newUser, this.props.history);
    // console.log(newUser);
  };

  render() {
    const { errors } = this.state;

    return (
      <div className={`${styles.register}`}>
        <div className={`${"row"} ${styles.noGutter}`}>
          <div className={`${"col-lg-7"} ${styles.register_right}`}>
            <div className={`${styles.heading} ${"mt-5"}`}>
              <h1 className="display-4">
                <span>Welcome to</span> <span>Bithela</span>
              </h1>
              <h5>Register to access your account</h5>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="container mt-5 px-5">
              <h5 className={styles.formTitle}>Bithela</h5>
              <form onSubmit={this.onSubmit}>
                <TextInput
                  name="firstName"
                  placeholder="First Name"
                  icon={<i className="fas fa-pen" />}
                  required={true}
                  onChange={this.onChange}
                  value={this.state.firstName}
                  error={errors.firstName}
                />
                <TextInput
                  name="lastName"
                  placeholder="Last Name"
                  icon={<i className="fas fa-pen" />}
                  onChange={this.onChange}
                  value={this.state.lastName}
                  error={errors.lastName}
                />
                <TextInput
                  name="email"
                  placeholder="Email"
                  icon={<i className="fas fa-envelope" />}
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                />
            
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
                  type="password"
                  name="password"
                  placeholder="Password"
                  icon={<i className="fas fa-lock" />}
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                />
                {/* <div className="form-group form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    I agree to Bithela's Terms of Use
                  </label>
                </div> */}
                <div className="row">
                  <div className="col">
                    <p>Already Registered? <Link to='login' className={styles.Link}>Login</Link></p>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className={`${"btn float-right"} ${
                        styles.registerButton
                        }`}
                    >
                      Register
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  stateToProps,
  actions
)(withRouter(Register));
