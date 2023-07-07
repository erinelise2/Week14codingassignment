// import React from "react";
// import ReviewForm from "./ReviewForm"

// Static Backdrop template from https://react-bootstrap.netlify.app/docs/components/modal/

import { useState } from 'react';
import Button from 'react-bootstrap/Button'; // leaving here, but changed to lowercase b from bootstrap
import Modal from 'react-bootstrap/Modal';

function ReviewList() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button onClick={handleShow} className="review-list-btn btn border-secondary bg-white form-control mt-2 mb-2" variant="white">
      View Reviews 
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className="text-dark">Film Reviews</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <table id="review-list-modal" className="review-list-modal m-1 table border-3 text-center">
                <thead class="table-header fw-bolder">
                    <tr>
                        <th>User</th>
                        <th>Date</th>
                        <th>Review</th>
                    </tr>
                </thead>
                <tbody class="table-body">

                </tbody>
            </table>
        </Modal.Body>
        <Modal.Footer>
          <button form="review-list-modal" variant="secondary" className="btn border-secondary bg-secondary text-white form-control mb-2">Return Home </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ReviewList;