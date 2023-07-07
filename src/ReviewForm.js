// import { useState, useEffect} from "react";
// import Star from './Stars';

// https://www.w3schools.com/react/react_usestate.asp
// https://legacy.reactjs.org/docs/hooks-state.html

// form skeleton from Mark Anthony's class... added/changed words to fit what I want to display: the username, the review, the date.... not sure how to do the star/flame rating

// function ReviewForm() {
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
//         <form action = "" >
//             <input onChange={handleChange} type="text" name="userName" placeholder="Your Name" />
//             <input onChange={handleChange} type="text" name="userReview" placeholder="Your Reivew" />
//              <input onchange={handleChange} type="date" name="reviewDate" placeholder="Today's Date" />
//             <button>Submit Your Review</button>
//         </form>
//     )
// }

// export default ReviewForm