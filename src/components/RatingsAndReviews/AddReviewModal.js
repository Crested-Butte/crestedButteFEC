
import React, {useState, useEffect} from 'react';
import AddReview from './AddReview.js';
const axios = require('axios').default;

function AddReviewModal(props) {
  const[charsId, setCharsId] = useState(null);
  let {showModal, closeModal} = props;

  const getCharsData = () => {
    axios({
      method: 'get',
      url: '/reviews/meta',
      params: {
        product_id: props.productId
      }
    })
      .then (res => {
        return res.data.characteristics})
      .then (data =>
        {setCharsId(data)})
      .catch(err => console.log(err));
  }

  useEffect(() => {getCharsData()},[])

  const renderModal = () => {
    return (
      <div className = "modal-expand">
        <div className = "modal-content">
          <div className ="modal-header">
            <h5>Write Your Review</h5>
            <h6>{`About the ${props.productName}`}</h6>
            <div className="close-btn">
          <button onClick={closeModal}>X</button>
          </div>
          </div>
          <div className="modal-body">
            {charsId && <AddReview
              closeModal = {closeModal}
              charsId = {charsId}
              productId = {props.productId}/>}
          </div>


        </div>
      </div>
    )
  }

  return (
    <>{showModal && renderModal()}</>
  )
}

export default AddReviewModal;