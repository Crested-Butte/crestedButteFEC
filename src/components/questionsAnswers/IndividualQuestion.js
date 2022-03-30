import React, { useState, useEffect } from "react";
import AnswerList from './AnswerList.js'
const IndividualQuestion = (props) => {
  //const [question, setQuestion] = useState(props.question)
  return (
    <div>
      <h4>question body: {props.question.question_body}</h4>
      <AnswerList answers={props.question.answers}/>
      <button onClick={() => alert('was it helpful')}>was this question helpful</button>
      <div>
        <button onClick={() => alert('you have nothing to contribute')}>add an answer</button>
      </div>
    </div>
  )
}

export default IndividualQuestion