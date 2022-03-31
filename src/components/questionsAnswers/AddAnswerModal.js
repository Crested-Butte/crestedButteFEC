import React, {useState, useEffect} from 'react';
import ReactModal from 'react-modal';
import AddAnswer from './AddAnswer.js';

ReactModal.setAppElement('#root');

function AddAnswerModal(props) {
  const [showModal, setShowModal] = useState(props.show);
  const [productName, setProductName] = useState(props.name)
  const [questionBody, setQuestionBody] = useState(props.body)
  const handleClose = () => setShowModal(false);
  const handleShow = () =>  setShowModal(true);

  return (
    <div>
      <button onClick={handleShow}>Add an Answer</button>
      <ReactModal
         isOpen={showModal}
         contentLabel="Minimal Modal Example"
      >
        <button onClick={handleClose}>Close Modal</button>
        <AddAnswer name={productName} question={questionBody}/>
      </ReactModal>
    </div>
  );
}

export default AddAnswerModal;