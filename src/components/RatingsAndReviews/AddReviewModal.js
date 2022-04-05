
import React, {useState, useEffect} from 'react';
import AddReview from './AddReview.js';

function AddReviewModal(props) {

  let {showModal, closeModal} = props;


  console.log('inside AddReviewModal',props)

  const renderModal = () => {
    return (
      <div className = "modal-container">
        <div className = "modal-content">
          <div className ="modal-header">
            <p>The modal title will go here</p>
          </div>
          <div className="modal-body">
            <AddReview closeModal = {closeModal}/>
          </div>
          <div className="modal-footer">
            <p>the modal footer will go here</p>
          </div>
          <button onClick={closeModal}>close</button>
        </div>
      </div>
    )
  }
  
  return (
    <>{showModal && renderModal()}</>
  )
}

export default AddReviewModal;