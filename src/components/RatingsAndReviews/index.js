import React from 'react';
import AddReviewModal from './AddReviewModal.js';
import ReviewList from './ReviewList.js';
import ReviewTile from './ReviewTile.js';
// testing a new branch to be pushed upstream to origin

const RatingsAndReviews = (props) => {

  return (
    <div>
      <ReviewList productId = {props.product.id}/>
      <ReviewTile productId = {props.product.id}/>
    </div>
  )
}

export default RatingsAndReviews;