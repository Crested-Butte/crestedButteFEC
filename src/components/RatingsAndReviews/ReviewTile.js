import React, {useState, useEffect} from 'react';
import getUserandDate from '../sharedComponents/userNameAndDate.js';
import Stars from '../sharedComponents/starRatings.js';

function ReviewTile(props) {
  const [reviewData, setReviewData] = useState();
  let {review} = props;

  const reccomendReview = () => {
    return (
      <div className = "col">
        {'\u221a : I reccomend this review'}
      </div>
    )
  }


  return (
    <div className="list-item">
      <div className = "row">
        <div className = "col">
          <Stars rating = {review.rating}/>
        </div>
        <div className = "col user-and-date">
          {getUserandDate(review)}
        </div>
      </div>
      <div className = "row review-summary">
        <strong>{review.summary}</strong>
      </div>
      <div className = "row review-body">
        {review.body}
      </div>
      <div className = "row review-reccomend">
        {review.recommend ? reccomendReview() : null}
      </div>
    </div>
  )
}

export default ReviewTile;

/*
- Star Rating
- Review Date
- Review Summary
- Review Body
- Response to Review
- Rating helpfulnes
- Sort Options
*/