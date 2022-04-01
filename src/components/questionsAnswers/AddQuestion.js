import React, { useState, useEffect } from "react";

const AddQuestion = (props) => {
  const [values, setValues] = useState({})

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
    if (values.nickname && values.body && values.email) {
      var str = 'sorry ' + values.nickname + ' the question: ' + values.body + ' is dumb'
      alert(str)
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
          question
          <input className="create-input" id="body" type="text" onChange={handleChange} placeholder="type question"></input>
        </label>
        </div>
        <div>
          <label>
          nickname
          <input className="create-input" id="nickname" type="text" onChange={handleChange} placeholder="type nickname"></input>
        </label>
        </div>
        <div>
          <label>
          email
          <input className="create-input" id="email" type="text" onChange={handleChange} placeholder="type email"></input>
        </label>
        </div>
          <div>
            <button className="addQuestionSubmit" onClick={handleSubmit} type="submit">Add Question</button>
          </div>

      </form>
    </div>
  )
}

export default AddQuestion