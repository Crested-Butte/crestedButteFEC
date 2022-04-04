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
      setReviewData(res.data.results)
    })
  }
  useEffect(() => {getAnswers()},[props.productId])

  const renderList= (arr) => {
    if (arr === undefined) {
      return (<>loading</>)
    } else {
      return (arr.map((review, index) =>
      <ReviewTile
      key = {index}
      review = {review}
      />))
    }
  }


  console.log(productId)

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          TESTING
        </div>
      </div>
      <div className="row">
        <div className="col">
        { reviewData ? renderList(reviewData) : <>laoding!</>}
        </div>
      </div>
      <div className="row">
        <div className="col">
          Implement More Reviews Here
        </div>
        <div className="col">
            Implement Add Review Here
        </div>
      </div>
    </div>
  )
}

export default ReviewList;

