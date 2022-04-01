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
  //console.log(props.product.id)
  // axios({
  //   url: '/products/' + productId
  // }).then((response) => {
  //   setProductName(response.data.name)
  //   console.log(props.product)
  // })


  useEffect( () => {
    console.log(productName)
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
      <h4>Questions about {productName}</h4>
      <Search/>

      <QuestionsList productName={productName} productId={productId}/>
      <div>
        <p>add question</p>
        <AddQuestionModal name={productName}/>
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

export default QuestionsAnswers