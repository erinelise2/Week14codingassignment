// import { useState, useEffect} from "react";
// import Form from "react-bootstrap/Form";
// import Star from './Stars';

// https://www.w3schools.com/react/react_usestate.asp
// https://legacy.reactjs.org/docs/hooks-state.html

// form skeleton from Mark Anthony's class... added/changed words to fit what I want to display: the username, the review, the date.... not sure how to do the star/flame rating

// export default function ReviewForm() {
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
//         <Form action = "" >
//             <Form.Label id="user-review-modal" className="user-review-modal text-dark">Fill out the information below to submit your review!</Form.Label>
//             <Form.Control className="mb-1" onChange={handleChange} type="text" id="userName" name="userName" placeholder="Your Name" />
//             <Form.Control className="mb-1" onChange={handleChange} type="text" id="userReview" name="userReview" placeholder="Your Reivew" />
//             <Form.Control className="text-secondary mb-1" onChange={handleChange} type="date" id="reviewDate" name="reviewDate"  />  
//             <button form="user-review-modal" variant="secondary" className="btn border-secondary bg-secondary text-white form-control mb-2">Submit Your Review </button>
//         </Form>
//     )
// }

