import React, {useState, useEffect} from 'react';
import getUserandDate from '../sharedComponents/userNameAndDate.js';

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
    <div>
      <div className = "row">
        <div className = "col">
          {`Star Count : ${review.rating}`}
        </div>
        <div className = "col">
          {getUserandDate(review)}
        </div>
      </div>
      <div className = "row">
        <strong>{review.summary}</strong>
      </div>
      <div className = "row">
        {review.body}
      </div>
      <div className = "row">
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