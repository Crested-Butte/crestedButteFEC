import React, { useState, useEffect } from "react";
import IndividualAnswer from './IndividualAnswer.js'

const AnswerList = (props) => {
  const [numberOfAnswers, setNumberOfAnswers] = useState(2)
  const answersArr = Object.values(props.answers)

  const renderAnswers = (answers) => {
    var answersToRender = answers.slice(0, numberOfAnswers)
    return answersToRender.map((answer) => {
      return <IndividualAnswer key={answer.id} answer={answer}/>
    })
  }
  return (
    <div className="answer">
      <h5>A:</h5>
      {answersArr.length === 0 ? <h5>No Answers Yet</h5> : renderAnswers(answersArr)}
      <div className="load-answers">
      <button onClick={() => setNumberOfAnswers(numberOfAnswers + 2)}>Load more Answers</button>
      </div>
    </div>
  )
}

export default AnswerList