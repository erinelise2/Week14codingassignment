// https://www.youtube.com/watch?v=rO2U3eFQ440
// https://www.freecodecamp.org/news/how-to-create-forms-in-react-using-react-hook-form/#:~:text=We%20also%20added%20the%20onSubmit,can%20track%20the%20changing%20data.
// https://blog.logrocket.com/accessing-previous-props-state-react-hooks/ ... went back and looked at videos for counter. Need to find out if they are hosted on youtube when class is over.


import React from "react";
import { Button, Form, Input } from "reactstrap";
import { useState } from 'react';
import ReviewList from "./ReviewList";

export default function Review(props) {
    const [user, setUser] = useState("");
    const [review, setReview] = useState("");
    const [date, setDate] = useState("")
  
    function saveReview(event) {
      event.preventDefault();
      props.setReviewData((prevData) => [
        ...prevData,
        {
          userName: user,
          userReview: review,
          reviewDate: date,
        },
      ]);
      setUser("");
      setReview("");
      setDate("");
    }
  
    return (
      <div className="form-container">
         <Form onSubmit={saveReview}> 
            <label className="review-form text-dark mb-2" >Fill out the information below to submit your review!</label>

            <Input className="form-control mb-2" type="text" placeholder="Your Name" name="userName" value={user}
            onChange={(event) => setUser(event.target.value)} required/>

            <Input className="form-control mb-2" type="text" placeholder="Your Review" name="userReview" value={review} 
            onChange={(event) => setReview(event.target.value)}/>

            <Input className="form-control mb-2" type="date" placeholder="Today's Date" name="reviewDate" value={date}
            onChange={(event) => setDate(event.target.value)} required/>

            <Button type="submit" className="btn border-secondary bg-secondary text-white form-control form-button form-control mb-2" > Submit Your Review </Button>

        </Form>
        <div className="text-dark">
            <ReviewList reviews={props.reviewData} />
        </div>
      </div>
    );
  }
