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
        <div className='StarRating'>
          <Rating
            onClick={handleRating}
            ratingValue={rating}
            fillColor="#002395"
          />
            <button className="btn border-secondary bg-secondary text-white form-control mt-3 form-button" type="submit" >Submit Your Rating</button>
        </div>
      )
    }