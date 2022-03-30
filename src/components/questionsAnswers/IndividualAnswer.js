import React, { useState, useEffect } from "react";

const IndividualAnswer = (props) => {
  console.log(props.answer)
  const answer = props.answer
  const day = answer.date.slice(8, 10)
  const month = answer.date.slice(5, 7)
  const year = answer.date.slice(0, 4)
  return (
    <div>
      <h5>answer body: {props.answer.body}</h5>
      <h5>by {answer.answerer_name}, at {day}-{month}, {year}</h5>
    </div>
  )
}

export default IndividualAnswer