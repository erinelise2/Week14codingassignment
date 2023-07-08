// https://www.youtube.com/watch?v=rO2U3eFQ440

import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from 'react';

export default function ReviewForm(props) {
    let [formData, setFormData] = useState({
        userName: '',
        userReview: '',
        reviewDate: '',
    })

    const handleOnChange = (field, value) => {
        let newFormData = {...formData};
        newFormData[field] = value;
        setFormData(newFormData);
    }

    console.log('render');

    return (
        <Form>
            <Form.Label className="review-form text-dark" >Fill out the information below to submit your review!</Form.Label>

            <input className="form-control mb-1" value={formData['userName']} onChange={e => handleOnChange('userName', e.target.value)} type="text" placeholder="Your Name" name="userName" />
         
            <input className="form-control mb-1" value={formData['userReview']} onChange={e => handleOnChange('userReview', e.target.value)} type="text" placeholder="Your Review" name="userReview" />

            <input className="form-control mb-1" value={formData['reviewDate']} onChange={e => handleOnChange('reviewDate', e.target.value)} type="date" placeholder="Today's Date" name="reviewData" />

            <button className="btn border-secondary bg-secondary text-white form-control mt-3 form-button" type="submit" >Submit Your Review</button>
        </Form>
    )
}

//     const [userName, setUserName] = useState("");
//     const [userReview, setUserReview] = useState("");
//     const [reviewDate, setReviewDate] = useState("");

//   // function that happens when the form is submitted
//   function saveReview(event) {
//     event.preventDefault();
//     props.setReviewData((prevData) => [
//       ...prevData,
//     ]);
//     // console.log(reviewData);
//     setUserName("");
//     setUserReview("");
//     setReviewDate("");
//   }

//   return (
//     <div>
//       <Form.Label className="review-form text-dark" onSubmit={saveReview}>Fill out the information below to submit your review!</Form.Label>
//         <Form.Control className="mb-1" type="text" id="userName" name="userName" placeholder="Your Name" value={userName}
//           onChange={(event) => setUserName(event.target.value)}
//           required />
//         <Form.Control className="mb-1" type="text" id="userReview" name="userReview" placeholder="Your Reivew" 
//           value={userReview} onChange={(event) => setUserReview(event.target.value)}
//           required />
//         <Form.Control className="text-secondary" type="date" id="reviewDate" name="reviewDate" value={reviewDate} onChange={(event) => setReviewDate(event.target.value)}
//         required />
//         <Button form="user-review-modal" variant="secondary" className="btn border-secondary bg-secondary text-white form-control mt-3 form-button">Submit Your Review</Button>
//     </div>
//   );
// }

// import { useState, useEffect} from "react";
// import Form from "react-bootstrap/Form";
// import Star from './Stars';

// https://www.w3schools.com/react/react_usestate.asp
// https://legacy.reactjs.org/docs/hooks-state.html

// form skeleton from Mark Anthony's class... added/changed words to fit what I want to display: the username, the review, the date.... not sure how to do the star/flame rating

// export default function ReviewForm() {
//     const [formData, setFormData] = useState({});

//     const handleChange = (e) => {
//         let user = e.target.userName;
//         let review = e.target.userReview;
//         let date = e.target.reviewDate;

//         setFormData(prev => ({...prev,[user]: review (date)}))
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(formData);
//     }

//     return (
//         <Form action = "" >
//             <Form.Label id="user-review-modal" className="user-review-modal text-dark">Fill out the information below to submit your review!</Form.Label>
//             <Form.Control className="mb-1" onChange={handleChange} type="text" id="userName" name="userName" placeholder="Your Name" />
//             <Form.Control className="mb-1" onChange={handleChange} type="text" id="userReview" name="userReview" placeholder="Your Reivew" />
//             <Form.Control className="text-secondary mb-1" onChange={handleChange} type="date" id="reviewDate" name="reviewDate"  />  
//             <button form="user-review-modal" variant="secondary" className="btn border-secondary bg-secondary text-white form-control mb-2">Submit Your Review </button>
//         </Form>
//     )
// }

