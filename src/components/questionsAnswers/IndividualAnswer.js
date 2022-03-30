import React, { useState, useEffect } from "react";

const IndividualAnswer = (props) => {
  return (
    <div>
      <h5>answer body: {props.answer.body}</h5>
    </div>
  )
}

export default IndividualAnswer