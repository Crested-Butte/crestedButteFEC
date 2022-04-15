import React, {useState, useEffect} from 'react';
import AddAnswer from './AddAnswer.js';


function AddAnswerModal(props) {
  const [showModal, setShowModal] = useState('none');
  const [productName, setProductName] = useState(props.name)
  const [questionBody, setQuestionBody] = useState(props.body)
  const handleClose = () => setShowModal('none');
  const handleShow = () =>  setShowModal('block');
  const styles = {
    modal: {
      display: showModal,/* Hidden by default */
      position: 'fixed', /* Stay in place */
      zIndex: '1', /* sit on top */
      left: '0',
      top: '0',
      width: '100%', /* Full width */
      height: '100%', /* Full height */
      overflow: 'auto', /* Enable scroll if needed */
      backgroundColor: 'rgb(0,0,0)', /* Fallback color */
      backgroundColor: 'rgba(0,0,0,0.8)' /* Black w/ opacity */
    }
  }
  return (
    <div id="addAnswer">
      <div className="add-answer">
      <button onClick={handleShow}>Add an Answer</button>
      </div>
      <div id="AddAnswerModal" style={styles.modal}>
        <div className="answer-modal">
         <div className="answer-modal-header">
         <button onClick={handleClose}>X</button>
         </div>
         <div className="answer-modal-body">
        <AddAnswer name={productName} cb={handleClose} id={props.id} question={questionBody}/>
        </div>
        </div>

        </div>
    </div>
  );
}

export default AddAnswerModal;