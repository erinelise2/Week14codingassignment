// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";
// import React from "react";
// import Review from "./Review";

// // https://mui.com/material-ui/react-modal/
// // https://www.npmjs.com/package/react-modal
// // https://codepen.io/claydiffrient/pen/KNxgav

// Static Backdrop template from https://react-bootstrap.netlify.app/docs/components/modal/

import { useState } from 'react';
import Button from 'react-bootstrap/Button'; // leaving here, but changed to lowercase b from bootstrap
import Modal from 'react-bootstrap/Modal';

function RateMovie() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button onClick={handleShow} className="rate-btn btn border-secondary bg-white form-control mb-2" variant="white">
      Rate Film 🔥
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className="text-dark">Rate the Film</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form id="user-rate-modal" className="user-rate-modal text-center">
                <label className="form-control radio">
                    <input className="m-2" id="button1" type="radio" name="classoptradio" value="5" checked /> 🔥🔥🔥🔥🔥
                </label><br />
                <label className="form-control radio">
                    <input className="m-2" id="button2" type="radio" name="classoptradio" value="4" /> 🔥🔥🔥🔥
                </label><br />
                <label className="form-control radio">
                    <input className="m-2" id="button3" type="radio" name="classoptradio" value="3" /> 🔥🔥🔥
                </label><br />
                <label className="form-control radio">
                    <input className="m-2" id="button4" type="radio" name="classoptradio" value="2" /> 🔥🔥
                </label><br />
                <label className="form-control radio">
                    <input className="m-2" id="button5" type="radio" name="classoptradio" value="1" /> 🔥
                </label><br />              
            </form>
        </Modal.Body>
        <Modal.Footer>
            <button form="user-rate-modal" variant="secondary" className="btn border-secondary bg-secondary text-white form-control mb-2">Submit Your Rating </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default RateMovie;