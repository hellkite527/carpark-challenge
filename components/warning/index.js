import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

export default function FullParkingWarning() {
  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>Alert!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Sorry! We do not have vacant spot for your vehicle at the moment. Please look for other parking spots
      </Modal.Body>
    </>
  );
}