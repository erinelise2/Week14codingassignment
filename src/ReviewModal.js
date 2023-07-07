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
      <Button className="review-btn btn border-secondary bg-white form-control mb-2" variant="white" onClick={handleShow}>
      Review Film 
      </Button>

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
            <form className="user-review-modal">
                <input className="form-control" type="text" name="userName" placeholder="Your Name" />
                <input className="form-control"type="text" name="userReview" placeholder="Your Reivew" />
                <input className="form-control"type="date" name="reviewDate" placeholder="Today's Date" />
            </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary">Submit Your Review</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ReviewMovie;