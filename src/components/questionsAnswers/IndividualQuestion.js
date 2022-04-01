import React, { useState, useEffect } from "react";
import AnswerList from './AnswerList.js';
import AddAnswerModal from './AddAnswerModal.js';
//import sharedDateanDUSER
const IndividualQuestion = (props) => {
  //const [question, setQuestion] = useState(props.question)
  var helpful = props.question.question_helpfulness
  var body = props.question.question_body
  console.log(props.question)
  return (
    <div>
      <h4>question body: {body}</h4>
      <AnswerList answers={props.question.answers}/>
      <p>end of answer list</p>
      <div>
        <button onClick={() => alert('was it helpful')}>Question helpful?</button>
        <span> {helpful} found helpful</span>
        </div>
      <div>
        <AddAnswerModal name={props.name} body={body}/>
      </div>
    </div>
  )
}

export default IndividualQuestion