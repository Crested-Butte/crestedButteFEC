import React, {useState, useEffect} from 'react';
import AddReviewModal from './AddReviewModal.js';
import ReviewList from './ReviewList.js';
import ReviewTile from './ReviewTile.js';
import RatingBreakDown from './ratingBreakDown.js';
import ProductBreakDown from './ProductBreakDown.js'

const RatingsAndReviews = (props) => {
  const [productId, setProductId] = useState(props.product.id);
  const [productName, setProductName] = useState(props.product.name)
  const[showModal, setShowModal] = useState(null)
  const closeModal = () => setShowModal(null);
  const openModal = () => setShowModal(true);

  useEffect( () => {
    setProductName(props.product.name)
    setProductId(props.product.id)
  }, [props.product])

  return (
    <div className="row">
      <div className="col-4 flex-down-container ratings-left">
        <RatingBreakDown productId = {productId}/>
        <ProductBreakDown productId = {productId}/>
      </div>
      <div className="col-8 flex-down-container ratings-right">
        <ReviewList productId = {productId}/>
        <br></br>
          <div className="write-review-btn">
            {!showModal && <button onClick = {openModal}>Write a Review</button>}
          </div>
        {showModal && <AddReviewModal
          showModal = {showModal}
          closeModal = {closeModal}
          productName = {productName}
          productId = {productId} />}
      </div>
    </div>
  )
}

export default RatingsAndReviews;