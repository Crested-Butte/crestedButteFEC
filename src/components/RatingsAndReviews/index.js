import React, {useState, useEffect} from 'react';
import AddReviewModal from './AddReviewModal.js';
import ReviewList from './ReviewList.js';
import ReviewTile from './ReviewTile.js';
import RatingBreakDown from './ratingBreakDown.js';
import ProductBreakDown from './ProductBreakDown.js'

const RatingsAndReviews = (props) => {
  const[showModal, setShowModal] = useState(null)
  const closeModal = () => setShowModal(null);
  const openModal = () => setShowModal(true);

  return (
    <div className="row">
      <div className="col-4 flex-down-container ratings-left">
        <RatingBreakDown productId = {props.product.id}/>
        <ProductBreakDown productId = {props.product.id}/>
      </div>
      <div className="col-8 flex-down-container ratings-right">
        <ReviewList productId = {props.product.id}/>
        <br></br>
        <div className="write-review-btn">
        {!showModal && <button onClick = {openModal}>Write a Review</button>}
        </div>
        {showModal && <AddReviewModal
          showModal = {showModal}
          closeModal = {closeModal}
          productName = {props.product.name}
          productId = {props.product.id} />}
      </div>
    </div>
  )
}

export default RatingsAndReviews;