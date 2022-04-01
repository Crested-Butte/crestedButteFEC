import React, { useState, useEffect } from "react";

const Search = (props) => {
  const [value, setValue] = useState()

  const handleChange = (event) => {
    event.persist();
    setValue(event.target.value)
    //console.log(event.target.value)
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    alert('you can\'t search shit yet!')
    //console.log(value)
  }
  return (
    <div>
      <h5> -search for questions and answers</h5>
      <form>
          <input className="create-input" id="title" type="text" onChange={handleChange} placeholder="Have a question? Search for answers…"></input>
          <div>
            <button className="create-submit-button" onClick={handleSubmit} type="submit">Search Questions</button>
          </div>

      </form>
    </div>
  )
}

export default Search