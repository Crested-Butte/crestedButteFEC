import React, { useState, useEffect } from "react";
const axios = require('axios');

const IndividualAnswer = (props) => {
  const [helpful, setHelpful] = useState(props.answer.helpfulness)
  const [answerId, setAnswerId] = useState(props.answer.id)

  const answer = props.answer
  const date = answer.date
  //const helpful = props.answer.helpfulness
  useEffect(() => {
    if (answerId !== props.answer.id) {
      setAnswerId(props.answer.id)
    }
  })
  const increaseHelpful = function (id) {
    var idStr = answerId.toString()
    axios({
      method: 'put',
      url: '/qa/questions/' + idStr + '/helpful',
    }).then((response) => {
      console.log(response)
      })
    setHelpful(helpful + 1)
  }
  const getDate = function (date) {
    const months = [null, 'january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december']
    const day = date.slice(8, 10)
    const month = date.slice(5, 7)
    const year = date.slice(0, 4)
    const monthStr = Number.parseInt(month)
    var dateStr = months[monthStr] + ' ' + day + ', ' +year
    return dateStr
  }
  return (
    <div>
      <p className="answer-body"><b>{props.answer.body}</b></p>

      <p className="answerer"><span> by {answer.answerer_name}, at {getDate(date)}</span><span> | <b>  Answer helpful? </b> | <span onClick={() => increaseHelpful(answerId)}><span className="answer-yes">Yes</span>({helpful})</span></span></p>

    </div>
  )
}

export default IndividualAnswer