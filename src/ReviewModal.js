// // https://mui.com/material-ui/react-modal/
// // https://www.npmjs.com/package/react-modal
// // https://codepen.io/claydiffrient/pen/KNxgav
// https://github.com/CalebCurry/react/blob/main/src/components/EditEmployee.js had some helpful codes for modals as well

// Static Backdrop template from https://react-bootstrap.netlify.app/docs/components/modal/ Love that these are so simple! This one pulls up from the Review Film Button that is added to Movie.js. It will also pull the review that is stored there while helping map the new ones with the reviewdata calls.

import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import ReviewForm from "./ReviewForm";


export default function ReviewModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="review-modal">
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
          <Modal.Title className="text-dark">Review {props.title} !</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <ReviewForm             
                reviewData={props.reviewData}
                setReviewData={props.setReviewData}/>
        </Modal.Body>
      </Modal>
    </div>
  );
}
