// used template from: https://www.npmjs.com/package/react-simple-star-rating

import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'
import Button from "react-bootstrap/Button";

export default function Stars() {
  const [rating, setRating] = useState(0)

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate)
  }

  const handleReset = () => {
    // Set the initial value
    setRating(0)
  }

  return (
    <div className='StarRating'>
      {/* set initial value */}
      <Rating 
        onClick={handleRating} 
        initialValue={rating}
        fillColor="#002395" />
        <br></br>
      <Button className="btn border-secondary bg-secondary text-white form-control form-button form-control mb-2" onClick={handleReset}>Reset Rating</Button>

      <div className="text-dark text-center">Your Current Rating ⭐  is:  { rating }</div>

    </div>
  )
};