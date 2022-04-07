import React, {useState,useEffect} from 'react';
import StarRating from '../sharedComponents/StarRatings.js';
import SmallButton from '../sharedComponents/SmallButton.js';
import YesNoRadioButton from '../sharedComponents/yesNoRadioButton.js'
const axios = require('axios').default;

function AddReview(props) {
  const [formData, setFormData] = useState({});


  const handleChange = (e) => {
    e.persist();
    let targetId = e.target.id;
    let targetValue = e.target.value;
    setFormData({
      ...formData,
      [e.target.id]:targetValue
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: 'post',
      url: '/reviews',
      params: formData
    })
      .then(res => console.log('success!', res))
      .catch(err => console.log('err'));
  }

  const handleRecommend = (e) => {

  }

  console.log(formData)

  return (
    <form>
      <div className="row">
        <div className="col">
          <input className="form-control" id="name" type="text" onChange={handleChange} maxLength = "60" placeholder="Example: jackson11!"></input>
          <h6>nickname</h6>
        </div>
        <div className="col">
          <input className="form-control" id="email" type="text" onChange={handleChange} maxLength = "60" placeholder="Example: pschaeff@email.com"></input>
          <h6>For privacy reasons, do not use your full name or email address</h6>
        </div>
      </div>
      <div className="row">
        <div className="col">
            <input className="form-control" id="characteristics" type="text" onChange={handleChange} maxLength = "60" ></input>
            <h6>characteristics</h6>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <textarea className="form-control" id="summary" type="text" onChange={handleChange} maxLength = "60" ></textarea>
          <h6>summary</h6>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <textarea className="form-control" id="body" type="text" onChange={handleChange} maxLength = "1000"></textarea>
          <h6>review body</h6>
        </div>
      </div>
      <div className="row">
        <div className="col">
          {<StarRating/>}
        </div>
        <div className="col">
        <YesNoRadioButton/>
        </div>
      </div>
      <div className="row">
        <div className="col">
        <SmallButton btnName = {'upload Photo'} onClick = {handleSubmit}/>
        </div>
        <div className="col">
          <h6>Image Thumbnails</h6>
        </div>
        <div className="col">
          <SmallButton btnName = {'submit'} onClick = {handleSubmit}/>
        </div>
      </div>
    </form>
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