// import { useState, useEffect} from "react";
// import Star from './Stars';

// https://www.w3schools.com/react/react_usestate.asp
// https://legacy.reactjs.org/docs/hooks-state.html

// form skeleton from Mark Anthony's class.

// function ReviewForm() {
//     const [formData, setFormData] = useState({});

//     const handleChange = (e) => {
//         let user = e.target.userName;
//         let review = e.target.userReview;

//         setFormData(prev => ({...prev,[user]: review}))
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(formData);
//     }

//     return (
//         <form action = "" >
//             <input onChange={handleChange} type="text" name="userName" placeholder="Your Name" />
//             <input onChange={handleChange} type="text" name="userReview" placeholder="Your Reivew" />
//             <button>Submit Your Review</button>
//         </form>
//     )
// }

// export default ReviewForm