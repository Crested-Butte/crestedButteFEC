import React, { useState, useEffect } from "react";
import IndividualQuestion from './IndividualQuestion.js'
const axios = require('axios');

const QuestionsList = (props) => {
  const [questions, setQuestions] = useState()
  axios({
    url: '/qa/questions',
    params: {
      product_id: props.productId
    }
  }).then( (response) => {
    console.log(response.data.results[0])
    if (!questions) {
      setQuestions(response.data.results)
    }
  })
  const renderQuestions = (questions) => {
    return questions.map((question) => {
      return <IndividualQuestion key={question.question_id} question={question}/>
    })
  }
  return (
    <div>
      <h2>-List of questions and answers</h2>
      {questions ? renderQuestions(questions) : <div>loading</div>}
    </div>
  )
}

export default QuestionsList