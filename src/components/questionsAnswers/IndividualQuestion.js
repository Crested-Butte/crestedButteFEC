import React, { useState, useEffect } from "react";
import AnswerList from './AnswerList.js';
import AddAnswerModal from './AddAnswerModal.js';
const axios = require('axios');

//import sharedDateanDUSER
const IndividualQuestion = (props) => {
  const [helpful, setHelpful] = useState(props.question.question_helpfulness)
  //var helpful = props.question.question_helpfulness
  var body = props.question.question_body
  var qId = props.question.question_id.toString()
  const increaseHelpful = function (id) {
    console.log('/qa/questions/' + id + '/helpful')
    console.log(typeof id)
    axios({
      method: 'put',
      url: '/qa/questions/' + id + '/helpful',
    }).then((response) => {
      console.log(response)
      })
    setHelpful(helpful + 1)
  }
  //console.log(props.question)
  return (
    <div>
      <div className="row">
        <div className="col-5"><h4>Q: {body} </h4></div>
        <div className="col-7">
          <span>Helpful? <b  onClick={() => increaseHelpful(qId)} >yes</b> {helpful} found helpful</span>
        </div>
      </div>
        <AnswerList answers={props.question.answers}/>
      <div>
        <AddAnswerModal name={props.name} id={qId} body={body}/>
      </div>
    </div>

  )
}

export default IndividualQuestion