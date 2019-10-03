import React, { Component } from 'react'
import {connect} from 'react-redux';

import { Modal, Button } from 'react-bootstrap';
import { closemodal } from '../../app/store/actions/modalActions'


const actions = {closemodal};

class WithdrawCashModal extends Component  {
    constructor(props) {
        super(props);
        this.state = {
            otp: ''
        }
    }
    render() {
        return (
            <div>
                <Modal
                    {...this.props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    show={true}
                >
                    <Modal.Header closeButton={() => this.props.closemodal()}>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Withdrawal Cash Modal
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h4>Centered Modal</h4>
                        <p>
                            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                            consectetur ac, vestibulum at eros.
                        </p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={() => this.props.closemodal()}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
    
}

export default connect(null, actions)(WithdrawCashModal)
