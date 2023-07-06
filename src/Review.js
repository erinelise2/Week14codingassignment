
import React from "react";
import ReactStars from "react-rating-stars-component";
import { render } from 'react-dom';
import ReviewList from "./ReviewList";

// https://www.npmjs.com/package/react-stars

export default function Review(props) {
    console.log(props.reviewData);
    let movieRating;
    const updateRating = (newRating) => {
        movieRating = `${newRating}🔥`;
    }
}

// state variables
const user = React.useRef(null);
const review = React.useRef(null);


render(
    <ReactStars
        count={5}
        onChange={updateRating}
        size={24}
        color2={'#ffd700'} 
    />,
    document.getElementById('where-to-render')
);