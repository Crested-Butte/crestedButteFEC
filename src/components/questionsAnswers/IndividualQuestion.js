import React, { useState, useEffect } from "react";
import AnswerList from './AnswerList.js'
const IndividualQuestion = (props) => {
  //const [question, setQuestion] = useState(props.question)
  var helpful = props.question.question_helpfulness
  return (
    <div>
      <h4>question body: {props.question.question_body}</h4>
      <AnswerList answers={props.question.answers}/>
      <p>end of answer list</p>
      <div>
        <button onClick={() => alert('was it helpful')}>Question helpful?</button>
        <span> {helpful} found helpful</span>
        </div>
      <div>
        <button onClick={() => alert('you have nothing to contribute')}>add an answer</button>
      </div>
    </div>
  )
}

export default IndividualQuestion