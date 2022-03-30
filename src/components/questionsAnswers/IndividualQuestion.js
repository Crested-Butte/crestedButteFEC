import React, { useState, useEffect } from "react";
import AnswerList from './AnswerList.js'
const IndividualQuestion = (props) => {
  //const [question, setQuestion] = useState(props.question)
  return (
    <div>
      <h3>--Individual question in List</h3>
      <h4>question body: {props.question.question_body}</h4>
      <AnswerList answers={props.question.answers}/>
      <button>was this question helpful</button>
      <div>
        <button>add an answer</button>
      </div>
    </div>
  )
}

export default IndividualQuestion