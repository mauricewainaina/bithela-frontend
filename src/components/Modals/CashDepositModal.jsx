import React from 'react'
import {connect} from 'react-redux';

import { Modal, Button } from 'react-bootstrap';
import { closemodal } from '../../app/store/actions/modalActions'


const actions = {closemodal};

const WithdrawModal = (props) => {
    return (
        <div>
            <Modal
                {...props}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={true}
            >
                <Modal.Header closeButton={() => props.closemodal()}>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Cash Deposit Modal
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>How to make a deposit</h4>
                    <p>
                        Cras mattis consectetur purus sit amet fermentum.
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => props.closemodal()}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default connect(null, actions)(WithdrawModal)
