import React, { useState, useEffect } from "react";
import IndividualQuestion from './IndividualQuestion.js'
import Search from './Search.js'
import AddQuestionModal from './AddQuestionModal.js'

const axios = require('axios');

const QuestionsList = (props) => {
  const [questions, setQuestions] = useState()
  const [productId, setProductId] = useState()
  const [numberOfQuestions, setNumberOfQuestions] = useState(2)
  //const [questionsInSearch, setQuestionsInSearch] = useState()
  const [searchStr, setSearchStr] = useState('')
  function loadQuestions () {
    axios({
      url: '/qa/questions',
      params: {
        product_id: props.productId
      }
    }).then( (response) => {
      setProductId(props.productId)
      setQuestions(response.data.results)
    })
  }

  // const setSearched = (str) => {
  //   var matchedSearchArr = questions.filter((question, index) => question.question_body.includes(str))
  //   setQuestionsInSearch(matchedSearchArr)
  // }
  const setStringToSearch = (str) => {
    setSearchStr(str)
  }



  const renderQuestions = (questions) => {
    console.log(searchStr)
    if (searchStr.length >= 3) {
      var questionsToRender = questions.filter((question, index) => question.question_body.includes(searchStr))
    } else {
      var questionsToRender = questions.slice(0, numberOfQuestions)
    }
    if (questions.length === 0) {
      return <h3>No Questions yet</h3>
    } else {
      return questionsToRender.map((question) => {
        return <IndividualQuestion name={props.productName} key={question.question_id} question={question}/>
      })
    }
  }
  useEffect(() => {
    if (props.productId !== productId) {
      loadQuestions()
    }
  })
  return (

    <div>
    {questions ?
      <div className="container">
        <div className="row">
          <div className="col-12"> <h4>Questions about {props.productName}</h4></div>
        </div>
        <div className="row">
          <div className="col-6">
            <Search cb={setStringToSearch}/>
          </div>
          <div className="col-6">
              {numberOfQuestions < questions.length ? <button onClick={() => setNumberOfQuestions(numberOfQuestions + 2)}>Load more questions</button> : null}
            </div>
        </div>
        <div>
          <div className="row">

            {questions ? renderQuestions(questions) : <div>loading</div>}
          </div>
          </div>
        </div> :
        null}
      </div>

  )
}

export default QuestionsList
//<h2>questions about {props.productName}</h2>