// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";
// import React from "react";
// import Review from "./Review";

// // https://mui.com/material-ui/react-modal/
// // https://www.npmjs.com/package/react-modal
// // https://codepen.io/claydiffrient/pen/KNxgav

// Static Backdrop templatef from https://react-bootstrap.netlify.app/docs/components/modal/

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

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
          <Modal.Title className="text-dark">Review Film</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form id="user-review-modal" className="user-review-modal">
                <input className="form-control mb-1" type="text" id="userName" name="userName" placeholder="Your Name" />
                <input className="form-control mb-1" type="text" id="userReview" name="userReview" placeholder="Your Reivew" />
                <input className="form-control" type="date" id="reviewDate" name="reviewDate" placeholder="Today's Date" />
            </form>
        </Modal.Body>
        <Modal.Footer>
          <button form="user-review-modal" variant="secondary" className="btn border-secondary bg-secondary text-white form-control mb-2">Submit Your Review</button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ReviewMovie;