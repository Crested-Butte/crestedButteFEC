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
      backgroundColor: 'rgba(0,0,0,0.4)' /* Black w/ opacity */
    },
    modalContent: {
      backgroundColor: '#fefefe',
      margin: 'auto',
      padding: '20px',
      border: '1px solid #888',
      width: '80%'
    }
  }
  return (
    <div>
      <button onClick={handleShow}>Add an Answer</button>
      <div id="AddAnswerModal" style={styles.modal}>
        <div style={styles.modalContent}>
          <button onClick={handleClose}>Close Modal</button>
        <AddAnswer name={productName} cb={handleClose} id={props.id} question={questionBody}/>
        </div>

        </div>
    </div>
  );
}

export default AddAnswerModal;