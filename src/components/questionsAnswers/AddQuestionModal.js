import React, {useState, useEffect} from 'react';
import ReactModal from 'react-modal';
import AddQuestion from './AddQuestion.js';

ReactModal.setAppElement('#root');

function AddQuestionModal(props) {
  const [showModal, setShowModal] = useState(props.show);
  const [productName, setProductName] = useState(props.name)
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <div>
      <button onClick={handleShow}>Add a Question</button>
      <ReactModal
         isOpen={showModal}
         contentLabel="Minimal Modal Example"
      >
        <button onClick={handleClose}>Close Modal</button>
        <AddQuestion name={productName}/>
      </ReactModal>
    </div>
  );
}

export default AddQuestionModal