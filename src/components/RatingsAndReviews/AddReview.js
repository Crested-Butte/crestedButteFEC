import React, {useState,useEffect} from 'react';
import StarRating from '../sharedComponents/starRatings.js';
import SmallButton from '../sharedComponents/smallButton.js';
import YesNoRadioButton from '../sharedComponents/yesNoRadioButton.js';
import Characteristics from './characteristics.js';
import UploadPhoto from '../sharedComponents/uploadPhoto.js';
import RateStarUser from './rateStarUser.js';
const axios = require('axios').default;

function AddReview(props) {
  const [formData, setFormData] = useState({['product_id']:props.productId});

  let charsId = props.charsId;
  console.log('where in props', props)

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

  const validateForm = (data) => {
    let validationRes = {flag:true, resText: 'FORM ERROR! PLEASE CORRECT\n'}

    if (!data) {
      validationRes.flag = false;
      validationRes.resText += 'invalid form!\n';
    }
    if (!data.name) {
      validationRes.flag = false;
      validationRes.resText += 'please enter a nickname\n';
    }
    if (!data.body || data.body.length < 50) {
      validationRes.flag = false;
      validationRes.resText+= 'body must have at least 50 charaters!\n';
    }
    if (!data.summary) {
      validationRes.flag = false;
      validationRes.resText += 'summary field should not beß blank\n';
    }
    if (!data.characteristics) {
      validationRes.flag = false;
      validationRes.resText += 'please submit at least on charactertic\n';
    }
    if (!data.recommend) {
      validationRes.flag = false;
      validationRes.resText += 'please submit a recommendation\n';
    }
    return validationRes;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let validated = validateForm(formData);
    if (validated.flag) {
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
        .then(res => {
          props.closeModal();
          return console.log('success!', res)})
        .catch(err => console.log(validated));
    } else {
      alert(validated.resText);
    }
  }

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
          <textarea className="form-control" id="body" type="text" onChange={handleChangeText} minLength = "40" maxLength = "1000" placeholder = "Why did you like the product or not?"></textarea>

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

