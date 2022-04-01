import ReactModal from 'react-modal';
import React, {useState, useEffect} from 'react';
import AddReview from './AddReview.js';

ReactModal.setAppElement('#root');



function AddReviewModal(props) {
  const [showModal, setShowModal] = useState(false);
  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <div>
      <button onClick={handleOpenModal}>Trigger Modal</button>
      <ReactModal
         isOpen={showModal}
         contentLabel="Minimal Modal Example"
      >
        <button onClick={handleCloseModal}>Close Modal</button>
        <AddReview name = {props.name}/>
      </ReactModal>
    </div>
  );
}

export default AddReviewModal;