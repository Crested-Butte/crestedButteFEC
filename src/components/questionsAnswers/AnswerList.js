import React, { useState, useEffect } from "react";
import IndividualAnswer from './IndividualAnswer.js'

const AnswerList = (props) => {
  const answersArr = Object.values(props.answers)
  const renderAnswers = (answers) => {
    return answers.slice(0, 3).map((answer) => {
      return <IndividualAnswer key={answer.id} answer={answer}/>
    })
  }
  return (
    <div>
      <h4> ---List of Answers to a question</h4>
      {answersArr.length === 0 ? <h5>No Answers Yet</h5> : renderAnswers(answersArr)}
    </div>
  )
}

export default AnswerList