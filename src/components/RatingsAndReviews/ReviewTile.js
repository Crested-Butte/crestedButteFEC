import React, {useState, useEffect} from 'react';

function ReviewTile(props) {
  const [reviewData, setReviewData] = useState();
  console.log('inside ReviewTile', props.review)

  return (
    <div>
      <div className = "row">
        <div className = "col">
        </div>
      </div>
      <div className = "row">
        <div className = "col">
          {}
        </div>
      </div>
      <div className = "row">
        <div className = "col">
          Reccomend review
        </div>
      </div>
      <div className = "row">
        <div className = "col">
            Review Response
        </div>
      </div>
      <div className = "row">
        <div className = "col">
            Rating helpfulnes
        </div>
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