import React, {useState, useEffect} from 'react';
import AddQuestion from './AddQuestion.js';


function AddQuestionModal(props) {
  const [showModal, setShowModal] = useState('none');
  const [productName, setProductName] = useState(props.name)
  const [id, setId] =useState(props.id)
  //console.log(props.id)
  const handleClose = () => setShowModal('none');
  const handleShow = () => setShowModal('block');
  useEffect(() => {
    //console.log(props.id)
    if (id !== props.id) {
      setId(props.id)
      setProductName(props.name)
    }
  })
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
    <div>
      <div className="add-a-question">
      <button onClick={handleShow}>Add a Question</button>
      </div>
      <div id="AddQuestionModal" style={styles.modal}>
        <div className="question-modal">
        <div className="question-modal-header">
          <button onClick={handleClose}>X</button>
          </div>
          <div className="question-modal-body">
          <AddQuestion cb={handleClose} id={id} name={productName}/>
          </div>
        </div>

        </div>
    </div>
  );
}

export default AddQuestionModal