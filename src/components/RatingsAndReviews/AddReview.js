import React, {useState,useEffect} from 'react';
import StarRating from '../sharedComponents/starRatings.js';
import SmallButton from '../sharedComponents/smallButton.js';
import YesNoRadioButton from '../sharedComponents/yesNoRadioButton.js';
import Characteristics from './characteristics.js';
import UploadPhoto from '../sharedComponents/uploadPhoto.js';
import RateStarUser from './RateStarUser.js';
const axios = require('axios').default;

function AddReview(props) {
  const [formData, setFormData] = useState({['product_id']:props.productId});
  const[showModal, setShowModal] = useState(null);
  const closeModal = () => setShowModal(null);
  const openModal = () => setShowModal(true);

  let charsId = props.charsId;

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
        characteristics:{
          ...formData.characteristics,
          [name]:parseInt(targetValue)}
    })
  }



  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/reviews',{
      "product_id": formData.product_id,
      "rating": formData.ratings,
      "summary": formData.summary,
      "body": formData.body,
      "recommend": formData.recommend,
      "name": formData.name,
      "email": formData.email,
      "photos": formData.photos,
      "characteristics": formData.characteristics
    })
      .then(res => console.log('success!', res))
      .catch(err => console.log('err'));
  }

  console.log(formData);

  return (
    <form>
      <div className="row">
        <div className="col nickname">
        <h6>Nickname</h6>
          <input className="form-control" id="name" type="text" onChange={handleChangeText} maxLength = "60" placeholder="Example: jackson11!"></input>

        </div>
        <div className="col email">
          <h6>Email</h6>
          <input className="form-control" id="email" type="text" onChange={handleChangeText} maxLength = "60" placeholder="Example: pschaeff@email.com"></input>
          <p>For privacy reasons, do not use your full name or email address</p>
        </div>
      </div>
      <div className="row characteristics">
        <div className="col">
        <h6>Characteristics</h6>
           {charsId ? Object.keys(charsId).map((characteristicName) => {
               return <Characteristics
                 key = {characteristicName}
                 name = {characteristicName}
                 id = {charsId[characteristicName].id}
                 onChange = {handleChangeCharacteristics}/>
             }) : null }

        </div>
      </div>
      <div className="row summary">
        <div className="col">
        <h6>Summary</h6>
          <textarea className="form-control" id="summary" type="text" onChange={handleChangeText} maxLength = "60" ></textarea>

        </div>
      </div>
      <div className="row review-body">
        <div className="col">
        <h6>Review body</h6>
          <textarea className="form-control" id="body" type="text" onChange={handleChangeText} maxLength = "1000"></textarea>

        </div>
      </div>
      <div className="row">
        <div className="col">
          <RateStarUser onChange = {handleChangeGeneral}/>
        </div>
        <div className="col">
        <YesNoRadioButton onChange = {handleChangeBoolean}/>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <UploadPhoto onChange = {handleChangeGeneral}/>
          <h6>Image Thumbnails</h6>
        </div>


      </div>
      <div className="write-review-btn">
          <SmallButton btnName = {'submit'} onClick = {handleSubmit}/>
        </div>
    </form>
  )
}

export default AddReview;

