import React, { useState, useEffect } from "react";
import Search from './Search.js'
import QuestionsList from './QuestionsList.js'
import AddQuestion from './AddQuestion.js'
import AddQuestionModal from './AddQuestionModal.js'
const axios = require('axios');

const QuestionsAnswers = (props) => {
  const [productId, setProductId] = useState()
  const [productName, setProductName] = useState()
  const [showModal, setShowModal] = useState(false)

  useEffect( () => {
    if (props.product.name !== productName) {
      setProductName(props.product.name)
    }
    if (props.product.id !== productId) {
      setProductId(props.product.id)
    }
  })

  const renderOut = () => {
    return (
      <div>
      {productName && productId ? <QuestionsList productName={productName} productId={productId}/> : <div>Loading</div>}
      <div>
      {productName && productId ? <AddQuestionModal id={productId} name={productName}/> : <div>Loading</div>}
      </div>
    </div>
    )
  }

  return (
    <div>
      {productName ? renderOut() : <h1>Loading Q and A</h1>}
    </div>
  )
}
      // <h4>Questions about {productName}</h4>
      // <Search/>
export default QuestionsAnswers