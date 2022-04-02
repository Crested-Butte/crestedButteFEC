import React, {useState,useEffect} from 'react';
import ReviewTile from './ReviewTile.js';
const axios = require('axios');

function ReviewList(props) {
  const [reviewData, setReviewData] = useState();
  const [productId, setProductId] = useState();


  const getAnswers = () => {
    axios({
      method: 'get',
      url: '/reviews/',
      params: {
        product_id: props.productId
      }
    }).then (res => {
      setProductId(props.productId)
      setReviewData(res.data.results)
    })
  }

  useEffect(() => {
    if(props.productId !== productId) {
      getAnswers()
    }
  })

  console.log('We are here!', reviewData)

  return (
<div> here</div>
  )
}

export default ReviewList;

