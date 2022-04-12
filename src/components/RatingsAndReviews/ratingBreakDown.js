import React, { useState, useEffect } from "react";
import ProgressBarRatings from  './progressBarRatings.js';
import Stars from '../sharedComponents/starRatings';
const axios = require('axios');

function RatingBreakDown(props) {
  const [reviewData, setReviewData] = useState(null);
  const [sumData, setSumData] = useState(null);

  const getRatingData = () => {
    axios({
      method: 'get',
      url: '/reviews/meta',
      params: {
        product_id: props.productId
      }
    })
      .then (res => {
        return res.data.ratings})
      .then (data =>
        {setReviewData(data);
        setSumData(Object.values(data).reduce((a,b) => (parseInt(a) + parseInt(b))))})
      .catch(err => console.log(err));
  }

  useEffect(() => {getRatingData()},[])


  return (

    <div className = "flex-down-container">
      <div>
        <h6>Ratings and Reviews</h6>
      </div>
      <div className ="flex-right-container">
        <div>
          {sumData ? `${sumData/5.0}` : null}
        </div>
        <div>
        </div>
      </div>
      <div>
        {sumData ? <ProgressBarRatings starName = {'1'} ratings = {parseInt(reviewData[1])} sumData = {sumData}/> : null}
      </div>
      <div>
        {sumData ? <ProgressBarRatings starName = {'2'}  ratings = {parseInt(reviewData[2])} sumData = {sumData}/> : null}
      </div>
      <div>
        {sumData ? <ProgressBarRatings starName = {'3'}  ratings = {parseInt(reviewData[3])} sumData = {sumData}/> : null}
      </div>
      <div>
        {sumData ? <ProgressBarRatings starName = {'4'}  ratings = {parseInt(reviewData[4])} sumData = {sumData}/> : null}
      </div>
      <div>
        {sumData ? <ProgressBarRatings starName = {'5'} ratings = {parseInt(reviewData[5])} sumData = {sumData}/> : null}
      </div>
    </div>

  )
}

export default RatingBreakDown;