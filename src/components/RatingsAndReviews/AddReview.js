import React, {useState,useEffect} from 'react';
import StarRating from '../sharedComponents/starRatings.js';
import SmallButton from '../sharedComponents/smallButton.js';
import YesNoRadioButton from '../sharedComponents/yesNoRadioButton.js';
import Characteristics from './characteristics.js';
import UploadPhoto from '../sharedComponents/uploadPhoto.js';
const axios = require('axios').default;

function AddReview(props) {
  const [formData, setFormData] = useState({['product_id']:props.productId});
  const[showModal, setShowModal] = useState(null);
  const closeModal = () => setShowModal(null);
  const openModal = () => setShowModal(true);

  const handleChangeText = (e) => {
    e.persist();
    let targetId = e.target.id;
    let targetValue = e.target.value;
    setFormData({
      ...formData,
      [targetId]:targetValue
    });
  }

  const handleChangeGeneral = (propertyName, value) => {
    setFormData({
      ...formData,
      [propertyName]:value
    });
  }

  const handleChangeNumber = (e) => {
    e.persist();
    let targetId = e.target.id;
    let targetValue = e.target.value;
    setFormData({
      ...formData,
      [targetId]:parseInt(targetValue)
    });
  }

  const handleChangeBoolean = (e) => {
    e.persist();
    let targetId = e.target.id;
    let targetValue = e.target.value;
    targetValue = targetValue ==='true'? true : false;
    setFormData({
      ...formData,
      [targetId]:targetValue
    })
  }

  const handleChangeCharacteristics = (e,name) => {
    e.persist();
    let targetId = e.target.id;
    let targetValue = e.target.value;
    setFormData({
      ...formData,
      ['characteristics']:{[name]:parseInt(targetValue)}
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: 'post',
      url: '/reviews',
      data: formData
    })
      .then(res => console.log('success!', res))
      .catch(err => console.log('err'));
  }

  return (
    <form>
      <div className="row">
        <div className="col">
          <input className="form-control" id="name" type="text" onChange={handleChangeText} maxLength = "60" placeholder="Example: jackson11!"></input>
          <h6>nickname</h6>
        </div>
        <div className="col">
          <input className="form-control" id="email" type="text" onChange={handleChangeText} maxLength = "60" placeholder="Example: pschaeff@email.com"></input>
          <h6>For privacy reasons, do not use your full name or email address</h6>
        </div>
      </div>
      <div className="row">
        <div className="col">
            <Characteristics productId = {props.productId} catagoryId = {'Size'} onChange={handleChangeCharacteristics}/>
            <Characteristics productId = {props.productId} catagoryId = {'Width'} onChange={handleChangeCharacteristics}/>
            <Characteristics productId = {props.productId} catagoryId = {'Comfort'} onChange={handleChangeCharacteristics}/>
            <Characteristics productId = {props.productId} catagoryId = {'Quality'} onChange={handleChangeCharacteristics}/>
            <Characteristics productId = {props.productId} catagoryId = {'Length'} onChange={handleChangeCharacteristics}/>
            <Characteristics productId = {props.productId} catagoryId = {'Fit'} onChange={handleChangeCharacteristics}/>
            <h6>characteristics</h6>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <textarea className="form-control" id="summary" type="text" onChange={handleChangeText} maxLength = "60" ></textarea>
          <h6>summary</h6>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <textarea className="form-control" id="body" type="text" onChange={handleChangeText} maxLength = "1000"></textarea>
          <h6>review body</h6>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h6>Star Ratings go here!</h6>
        </div>
        <div className="col">
        <YesNoRadioButton onChange = {handleChangeBoolean}/>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <UploadPhoto onChange = {handleChangeGeneral}/>
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
-> submit review buttonjjj
*/