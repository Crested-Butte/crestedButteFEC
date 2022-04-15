import React, { useState, useEffect } from "react";
const axios = require('axios');
const AddQuestion = (props) => {
  const [values, setValues] = useState({product_id: props.id})
  useEffect(() => {
    if (props.id !== values.product_id) {
      setValues({
        ...values,
        product_id: props.id
      })
    }
  })
  const handleChange = (event) => {
    event.persist();
    var key = event.target.id
    var val = event.target.value
    setValues({
      ...values,
      [key]: val
    })
    //console.log(values)
  }
  const postQuestion = function (data) {
    console.log('inside qpost', data)
    axios({
    method: 'post',
    url: '/qa/questions',
    data: data
    }).then((response) => {
      console.log(response)
      })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (values.name && values.body && values.email) {
      //alert(str)
      postQuestion(values)
      props.cb()
    } else {
       alert('one or more values missing')
    }
  }
  return (
    <div>
      <h1>Ask Your Question</h1>
      <h2>About the {props.name}</h2>
      <form>
        <div>
          <label>
          Question
          <input className="create-input" id="body" type="text" onChange={handleChange} placeholder="type question"></input>
        </label>
        </div>
        <div>
          <label>
          Nickname
          <input className="create-input" id="name" type="text" onChange={handleChange} placeholder="type nickname"></input>
        </label>
        </div>
        <div>
          <label>
          Email
          <input className="create-input" id="email" type="text" onChange={handleChange} placeholder="type email"></input>
        </label>
        </div>
          <div className="submit-add-question">
            <button className="addQuestionSubmit" onClick={handleSubmit} type="submit">Add Question</button>
          </div>

      </form>
    </div>
  )
}

export default AddQuestion