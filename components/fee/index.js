import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import calculateFee from '../../utils/calculateFee';

export default function FeeMdodal({ parkingSlotSize }) {
  const [hours, setHours] = useState(null);
  const [fee, setFee] = useState(0);

  const handleCompluteFee = () => {
    setFee(calculateFee(hours, parkingSlotSize))
  }

  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>Calculating your fees</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Number of Hours</Form.Label>
        <Form.Control
          type="text"
          pattern="^[0-9]*$"
          placeholder="Enter number of hours"
          onChange={(e) => setHours(e.target.value)}
        />
      </Form.Group>

        Total Fee: { fee }
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleCompluteFee}>
          Calculate
        </Button>
      </Modal.Footer>
    </>
  );
}