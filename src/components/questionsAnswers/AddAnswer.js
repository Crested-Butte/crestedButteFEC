import React, { useState, useEffect } from "react";
const axios = require('axios');

const AddAnswer = (props) => {
  const [values, setValues] = useState()
  const [id, setId] = useState(props.id)

  useEffect(() => {
    if (props.id !== id) {
      setId(props.id)
    }
  })
  const postAnswer = function (data) {
    axios({
      method: 'post',
      url: '/qa/questions/' + id + '/answers',
      data: data
    }).then((response) => {
      console.log(response)
      })
  }
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
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(values, id, typeof id)
    if (values.name && values.body && values.email) {
      postAnswer(values)
      //var str = 'nickname: ' + values.nickname + '\n answer: ' + values.answer + '\n email: ' + values.email
      //alert(str)
      props.cb()
    } else {
       alert('one or more values missing')
    }


  }
  return (
    <div>
      <h1>Submit your Answer</h1>
      <h2>{props.name}: {props.question}</h2>
      <form>
        <div>
          <label>
          answer:
          <div>
            <input className="create-input" id="body" type="text" onChange={handleChange} placeholder="type answer"></input>
          </div>
        </label>
        </div>
        <div>
          <label>
          nickname
          <div>
            <input className="create-input" id="name" type="text" onChange={handleChange} placeholder="type nickname"></input>
          </div>
        </label>
        </div>
        <div>
          <label>
          email
          <div>
            <input className="create-input" id="email" type="text" onChange={handleChange} placeholder="type email"></input>
          </div>
        </label>
        </div>
          <div>
            <button className="addQuestionSubmit" onClick={handleSubmit} type="submit">Add Answer</button>
          </div>

      </form>
    </div>
  )
}

export default AddAnswer