import React from 'react';
import AddReviewModal from './AddReviewModal.js';
import ReviewList from './ReviewList.js';
// testing a new branch to be pushed upstream to origin


function RatingsAndReviews (props) {
      return (
        <div>

        </div>
        <AddReviewModal name = {props.product.name}/>
        <ReviewTile/>
      )
}

export default RatingsAndReviews;