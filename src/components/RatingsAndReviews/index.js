import React, {useState, useEffect} from 'react';
import AddReviewModal from './AddReviewModal.js';
import ReviewList from './ReviewList.js';
import ReviewTile from './ReviewTile.js';

const RatingsAndReviews = (props) => {
  const[showModal, setShowModal] = useState(null)
  const closeModal = () => setShowModal(null);
  const openModal = () => setShowModal(true);

  console.log(showModal)

  return (
    <div>
      <div className = "row">
        <div className = "col">
          <p>Placeholder for Rating Breakdown module  </p>
        </div>
        <div className = "col">
        <p>Placeholder for Sort Module </p>
        </div>
      </div>
      <div className = "row">
        <div className = "col">
          <p>Placeholder for Product Breakdown module  </p>
        </div>
        <div className = "col">
          <ReviewList productId = {props.product.id}/>
        </div>
      </div>
      <div className = "row">
        <div className = "col">
        </div>
        <div className = "col">
        {!showModal && <button onClick = {openModal}>show Modal</button>}
        {showModal && <AddReviewModal showModal = {showModal} closeModal = {closeModal}/>}
        </div>
      </div>
    </div>
  )
}

export default RatingsAndReviews;