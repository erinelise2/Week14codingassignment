// import React from "react";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import { useState } from 'react';

// export default function Review(props) {
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


// export default class Review extends React.Component{
//     /* Review components display user, date, and text */
//         render(){
//             return(
//                 <div className="review">
//                 <td>{this.props.userName}</td>
//                 <td>{this.props.reviewDate}</td>
//                 <td>{this.props.userReview}</td>
//                 </div>
//             );     
//         }
//     }

{/* <Stars handleClick={setStarRating} rating={starRating} />
<button className="form-button">Submit your review</button>
</form>
<ReviewList reviews={props.reviewData} /> */}