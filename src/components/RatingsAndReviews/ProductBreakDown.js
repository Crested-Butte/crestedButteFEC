import React, { useState, useEffect } from "react";
import ProgressBarProduct from  './ProgressBarProduct.js';
const axios = require('axios');

function ProductBreakDown(props) {
  const [reviewData, setReviewData] = useState(null);
  
  let {productId} = props;

  const getCharsData = () => {
    axios({
      method: 'get',
      url: '/reviews/meta',
      params: {
        product_id: productId
      }
    })
      .then (res => {
        return res.data.characteristics})
      .then (data =>
        {setReviewData(data)})
      .catch(err => console.log(err));
  }

  useEffect(() => {getCharsData()},[productId])

  return (
    <div className = "flex-down-container product-breakdown">
      <div>
        {reviewData ? Object.keys(reviewData).map((key) => {
          return <ProgressBarProduct
            key = {reviewData[key].id}
            data = {{[key]:reviewData[key].value}}/>
        }) : null
        }
      </div>
    </div>
  )
}

export default ProductBreakDown;
