// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";
// import React from "react";
// import Review from "./Review";

// // https://mui.com/material-ui/react-modal/
// // https://www.npmjs.com/package/react-modal
// // https://codepen.io/claydiffrient/pen/KNxgav

// Static Backdrop template from https://react-bootstrap.netlify.app/docs/components/modal/

import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import ReviewForm from "./ReviewForm";



function ReviewMovie() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button onClick={handleShow} className="review-btn btn border-secondary bg-white form-control mb-2" variant="white">
      Review Film 
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className="text-dark">Review This Film</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <ReviewForm />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ReviewMovie;

