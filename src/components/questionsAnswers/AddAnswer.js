import React, { useState, useEffect } from "react";

const AddAnswer = (props) => {
  const [values, setValues] = useState({})

  //this.state = setState({values: {}})
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
    console.log(values)
    if (values.nickname && values.answer && values.email) {
      var str = 'nickname: ' + values.nickname + '\n answer: ' + values.answer + '\n email: ' + values.email
      alert(str)
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
          answer
          <input className="create-input" id="answer" type="text" onChange={handleChange} placeholder="type answer"></input>
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
            <button className="addQuestionSubmit" onClick={handleSubmit} type="submit">Add Answer</button>
          </div>

      </form>
    </div>
  )
}

export default AddAnswer