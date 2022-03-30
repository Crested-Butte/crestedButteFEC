import React, { useState, useEffect } from "react";
import Search from './Search.js'
import QuestionsList from './QuestionsList.js'
import AddQuestion from './AddQuestion.js'
const axios = require('axios');

const QuestionsAnswers = (props) => {
  const [productId, setPorductId] = useState(37315)
  const [productName, setProductName] = useState()
  axios({
    url: '/products/' + productId
  }).then((response) => {
    setProductName(response.data.name)
  })

  const renderOut = () => {
    return (
      <div>
      <h1>Questions and Answers about {productName}</h1>
      <Search/>
      <QuestionsList productName={productName} productId={productId}/>
      <AddQuestion/>
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