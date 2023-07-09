export default function ReviewList(props) {
    return (
      <div className="review-list">
        {props.reviews.map((review, index) => (
          <p className="review-form-info text-center mt-2" key={index}>
            {review.userName} : "{review.userReview}" ({review.reviewDate})</p>
        ))}
      </div>
    );
  }
  
//   static review is listed on the Movie page. This function adds a new review to the bottom of the modal... it does not store the data anywhere. I know we do not have to, but I was mentally struggling with trying to get this to store them all week... I am apparently struggling

// https://www.pluralsight.com/guides/how-to-use-the-map()-function-to-export-javascript-in-react data.map for the main page. It displays the array of objects that are contained in my data list file and pulls based on the props like title, actors, etc. reivews are an array. So it can pull them based on the modal and place under the text on submit. The array accepts reviews per card/properties and displays. https://legacy.reactjs.org/docs/lists-and-keys.html