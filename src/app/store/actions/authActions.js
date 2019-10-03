import axios from 'axios'
import jwt_decode from 'jwt-decode'
import { toastr } from "react-redux-toastr";

import { SIGN_UP, LOGIN, GET_ERRORS, SET_CURRENT_USER } from "./types";
import setAuthToken from '../../utils/setAuthToken'

const url = 'https://backend.bithela.com'

// Register New User
export const registerUser = (userData, history) => dispatch => {
    axios.post(`${url}/api/users/register`, userData)
        .then(res => {
            dispatch({
                type: SIGN_UP,
                payload: res.data.details.phoneNumber
            })
            history.push('/verify')
        })
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        }
        )
}

// Get Users Phone Number
export const getUsersPhoneNumber = (phoneNumber) => {
    return {
        type: SIGN_UP,
        payload: phoneNumber
    }
}

// Verify New User
export const verifyUser = (number, history) => dispatch => {
    axios.post(`${url}/api/users/verify`, number)
        .then(res => {
            toastr.success('Success!', 'Account Verified')
            history.push('/login')
        })
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        }

        )
}

// Resend Verification Code 
export const resendOTP = (userData, history) => dispatch => {
    axios.post(`${url}/api/users/resendOTP`, userData)
        .then(res => {
            toastr.warning('Account not Verified!', 'Kindly provide the code recieved ')
            history.push('/verify')
        })
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response
            })
        })
}

// Login User
export const loginUser = (userData) => dispatch => {
    // dispatch(setAuthLoadingTrue());
    axios.post(`${url}/api/users/login`, userData)
        .then(res => {
            if (res.data.details.token) {
                // Save to local Storage
                const { token } = res.data.details;

                // Set token to Local Storage
                localStorage.setItem('jwtToken', token)

                // Set token to auth Header
                setAuthToken(token)

                // Decode token to get users data
                const decoded = jwt_decode(token)

                // Set current user
                dispatch(setCurrentUser(decoded))


            }
        })
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        }

        )
}


// Forgot Password
export const forgotPassword = (phoneNumber, history) => dispatch => {
    axios.post(`${url}/api/users/password/forgot`, phoneNumber)
        .then(res => {
            history.push('/resetpassword')
        }).catch(err => console.log(err))
}

// Forgot Password Verify
export const forgotPasswordVerify = (data, history) => dispatch => {
    axios.post(`${url}/api/users/password/forgot/verify`, data)
        .then(res => {
            toastr.success('Success!', 'Password changed!')
            history.push('/login')
        }).catch(err => console.log(err))
}

// Set logged in user
export const setCurrentUser = (decoded) => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    }
}

// Log user out 
export const logoutUser = () => dispatch => {
    // Remove token from localStorage
    localStorage.removeItem('jwtToken');
    // Remove auth header for future requests
    setAuthToken(false);
    // Set current user to {} , setting isAuthenticated to false
    dispatch(setCurrentUser({}))
}



