import React, {useState,useEffect} from 'react';

function AddReview(props) {
  const [vals, setValues] = useState({});


  const handleChange = (e) => {
    e.persist();
    let targetId = e.target.id;
    let targetValue = e.target.value;
    setValues({
      ...vals,
      [e.target.id]:targetValue
    })
    console.log(targetValue)
  }

  const handleSubmit = (e) => {
    event.preventDefault();
  }

  return (
    <div>
      <h2>{`About the ${props.name}`}</h2>
      <h1>Write Your Review</h1>
      <form>
        <div>
          <label>
          body
          <textarea className="create-input" id="body" type="text" onChange={handleChange} maxLength = "1000" placeholder="Why did you like the product or not"></textarea>
        </label>
        </div>
        <div>
          <label>
          summary
          <input className="create-input" id="summary" type="text" onChange={handleChange} maxLength = "60" placeholder="Enter Summary Here"></input>
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


/* To do
-> limit body chars [50,1000] if lower than 50 then submission will fail
-> A review summary of up to 60 chars     -- complete
-> generate a 5 star selectable icon
-> radio button consisting of "Yes" and "No" for would or would not reccomend'
-> characteristics? 5 radio buttons
-> upload photos. Photos will render as thumbnial images
-> nickname "maximum 60 chars"
-> submit review button
*/