
import React, {useState, useEffect} from 'react';
import AddReview from './AddReview.js';

function AddReviewModal(props) {

  let {showModal, closeModal} = props;

  const renderModal = () => {
    return (
      <div className = "modal-expand">
        <div className = "modal-content">
          <div className ="modal-header">
            <h5>Write Your Review</h5>
            <h6>{`About the ${props.productName}`}</h6>
          </div>
          <div className="modal-body">
            <AddReview
              closeModal = {closeModal}
              productId = {props.productId}/>
          </div>
          <div className="modal-footer">
            <p>the modal footer will go here</p>
          </div>
          <button onClick={closeModal}>`[X]`</button>
        </div>
      </div>
    )
  }

  return (
    <>{showModal && renderModal()}</>
  )
}

export default AddReviewModal;