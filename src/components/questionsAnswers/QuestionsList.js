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
    if (questions.length === 0) {
      return <h3>No Questions yet</h3>
    } else {
      return questions.map((question) => {
        return <IndividualQuestion name={props.productName} key={question.question_id} question={question}/>
    })
    }

  }
  return (
    <div>

      {questions ? renderQuestions(questions) : <div>loading</div>}
    </div>
  )
}

export default QuestionsList
//<h2>questions about {props.productName}</h2>