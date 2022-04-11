import React, { useState, useEffect } from "react";
import ProgressBar from  './progressBar.js';
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
      .then (res => res.data.ratings)
      .then (data =>
        {setReviewData(data);
        setSumData(Object.values(data).reduce((a,b) => (parseInt(a) + parseInt(b))))})
      .catch(err => console.log(err));
  }

  useEffect(() => {getRatingData()},[])


  return (

    <div>
      <div>
        {sumData ? <ProgressBar ratings = {parseInt(reviewData[1])} sumData = {sumData}/> : null}
      </div>
      <div>
        {sumData ? <ProgressBar ratings = {parseInt(reviewData[2])} sumData = {sumData}/> : null}
      </div>
      <div>
        {sumData ? <ProgressBar ratings = {parseInt(reviewData[3])} sumData = {sumData}/> : null}
      </div>
      <div>
        {sumData ? <ProgressBar ratings = {parseInt(reviewData[4])} sumData = {sumData}/> : null}
      </div>
      <div>
        {sumData ? <ProgressBar ratings = {parseInt(reviewData[5])} sumData = {sumData}/> : null}
      </div>
    </div>

  )
}

export default RatingBreakDown;