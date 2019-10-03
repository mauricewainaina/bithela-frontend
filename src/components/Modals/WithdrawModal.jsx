import React, { Component } from 'react'
import { connect } from 'react-redux';

import TextInput from '../../app/common/form/TextInput'
import { Modal, Button } from 'react-bootstrap';
import { closemodal } from '../../app/store/actions/modalActions'
import { withdrawverify } from '../../app/store/actions/withdrawActions'
import { Link, withRouter } from "react-router-dom";

import styles from "./Modals.module.css";


const actions = {
    closemodal,
    withdrawverify
};

const stateToProps = (state) => ({
    auth: state.auth,
})

class WithdrawModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            otp: ''
        }
    }

    onChange = ({ target }) => {
        this.setState({ [target.name]: target.value })
    }

    onSubmit = (e) => {
        e.preventDefault();
        const userData = {
            phoneNumber: '+254713454688',
            otp: this.state.otp,
        }
        this.props.withdrawverify(userData, this.props.history)
        console.log('clocked')
    }

    render() {
        return (
            <Modal
                {...this.props}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={true}
            >
                <Modal.Header closeButton={() => this.props.closemodal()} className={styles.modal}>
                    <Modal.Title id="contained-modal-title-vcenter" className={styles.important}>
                        Verify Withdrawal
                        </Modal.Title>
                </Modal.Header>
                <form onSubmit={this.onSubmit}>
                    <Modal.Body className={styles.modal}>
                        <p>Kindly submit the code sent to your phone</p>

                        <TextInput
                            name="otp"
                            type="number"
                            placeholder='Enter code'
                            value={this.state.otp}
                            onChange={this.onChange}
                            required={true}
                            icon={<i className="fas fa-lock"></i>}
                        />


                    </Modal.Body>
                    <Modal.Footer className={styles.modal}>
                        {/* <Button onClick={() => this.props.closemodal()}>Close</Button> */}
                        <Button type='submit' className={styles.submitButton} >Submit</Button>
                    </Modal.Footer>
                </form>
            </Modal>
        )
    }
}

export default connect(stateToProps, actions)(withRouter(WithdrawModal))

