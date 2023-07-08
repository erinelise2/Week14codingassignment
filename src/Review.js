import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Review(props) {
    const [userValue, setUserValue] = React.useState("");
    const [reviewValue, setReviewValue] = React.useState("");
    const [dateValue, setDateValue] = React.useState(null);

  // function that happens when the form is submitted
  function saveReview(event) {
    event.preventDefault();
    props.setReviewData((prevData) => [
      ...prevData,
      {
        userName: userValue,
        userReview: reviewValue,
        reviewDate: dateValue,
      },
    ]);
    // console.log(reviewData);
    setUserValue("");
    setReviewValue("");
    setDateValue(null);
  }

  return (
    <div>
      <Form.Label className="review-form text-dark" onSubmit={saveReview}>Fill out the information below to submit your review!</Form.Label>
        <Form.Control className="mb-1" type="text" id="userName" name="userName" placeholder="Your Name" value={userValue}
          onChange={(event) => setUserValue(event.target.value)}
          required />
        <Form.Control className="mb-1" type="text" id="userReview" name="userReview" placeholder="Your Reivew" 
          value={reviewValue} onChange={(event) => setReviewValue(event.target.value)}
          required />
        <Form.Control className="text-secondary" type="date" id="reviewDate" name="reviewDate" value={dateValue} onChange={(event) => setDateValue(event.target.value)}
        required />
        <Button form="user-review-modal" variant="secondary" className="btn border-secondary bg-secondary text-white form-control mt-3 form-button">Submit Your Review</Button>
    </div>
  );
}


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