import React, {useState,useEffect} from 'react';

function AddReview(props) {
  const [vals, setValues] = useState({});


  const handleChange = (e) => {
    e.persist();
    setValues({
      ...vals,
      [e.target.id]:e.target.value
    })
    console.log(vals)
  }

  const handleSubmit = (e) => {
    event.preventDefault();
    console.log(vals)
  }

  return (
    <div>
      <h2>{`About the ${props.name}`}</h2>
      <h1>Write Your Review</h1>
      <form>
        <div>
          <label>
          body
          <textarea className="create-input" id="body" type="text" onChange={handleChange} placeholder="type answer"></textarea>
        </label>
        </div>
        <div>
          <label>
          summary
          <input className="create-input" id="summary" type="text" onChange={handleChange} placeholder="type nickname"></input>
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

export default AddReview;