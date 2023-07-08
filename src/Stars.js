// used template from: https://www.npmjs.com/package/react-simple-star-rating

import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'

export default function Stars() {
    const [rating, setRating] = useState(0)
  
    // Catch Rating value
    const handleRating = (rate) => {
      setRating(rate)

    }

    return (
      <div className='App'>
        <Rating
          onClick={handleRating}
          ratingValue={rating}
          fillColor="#002395"
        />
        {rating}
      </div>
    )
  }