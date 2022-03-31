import React, { useState, useEffect } from "react";

const IndividualAnswer = (props) => {
  console.log(props.answer)
  const answer = props.answer
  const date = answer.date
  const helpful = props.answer.helpfulness
  // const day = answer.date.slice(8, 10)
  // const month = answer.date.slice(5, 7)
  // const year = answer.date.slice(0, 4)
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
      <h5>answer body: {props.answer.body}</h5>
      <h5>by {answer.answerer_name}, at {getDate(date)}</h5>
      <button onClick={() => alert('was answer helpul')}>answer helpful?</button>
      <span>{helpful} found answer helpful</span>
    </div>
  )
}

export default IndividualAnswer