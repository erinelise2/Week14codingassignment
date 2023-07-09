// import React from 'react';
// import ReviewList from "./ReviewList";
// import { useState } from 'react';


// export default function Review(props) {
//   const [userValue, setUserValue] = useState("");
//   const [reviewValue, setReviewValue] = useState("");

//   function saveReview(event) {
//     event.preventDefault();
//     props.setReviewData((prevData) => [
//       ...prevData,
//       {
//         userName: userValue,
//         userReview: reviewValue,
//       },
//     ]);

//     setUserValue("");
//     setReviewValue("");
//   }
//   return (
//     <div>
//       <form className="review-form" onSubmit={saveReview}>
//         <input
//           type="text"
//           placeholder="Enter your name"
//           name="userName"
//           value={userValue}
//           onChange={(event) => setUserValue(event.target.value)}
//           required
//         />
//         <textarea
//           placeholder="Enter your review"
//           name="userReview"
//           value={reviewValue}
//           onChange={(event) => setReviewValue(event.target.value)}
//           required
//         />
       
//         <button className="form-button">Submit your review</button>
//       </form>
//       <ReviewList reviews={props.reviewData} />
//     </div>
//   );
// }