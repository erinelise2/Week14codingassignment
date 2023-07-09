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