// used template from: https://www.npmjs.com/package/react-simple-star-rating

import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'
import Button from 'react-bootstrap/Button'; 

export default function Stars() {
    const [rating, setRating] = useState(0)
  
    // Catch Rating value
    const handleRating = (rate) => {
      setRating(rate)
    }

    return (
        <div className='StarRating'>
          <Rating
            onClick={handleRating}
            ratingValue={rating}
            fillColor="#002395"
          />
          <Button type="submit" form="user-rate-modal" variant="secondary" className="btn border-secondary bg-secondary text-white form-control m-3">Submit Your Rating </Button>
        </div>
      )
    }