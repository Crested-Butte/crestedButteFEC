import React from 'react';
import AddReviewModal from './AddReviewModal.js'

// testing a new branch to be pushed upstream to origin


function RatingsAndReviews (props) {
      return <AddReviewModal name = {props.product.name}/>
}

export default RatingsAndReviews;