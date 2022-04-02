import React, {useState,useEffect} from 'react';
import ReviewTile from './ReviewTile.js';
const axios = require('axios');

function ReviewList(props) {
  const [reviewData, setReviewData] = useState([]);
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

  console.log(reviewData)

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          Implement Sort here
        </div>
      </div>
      <div className="row">
        <div className="col">
          {reviewData.map((review, index) => {
            return (
              <div className="row">
              <div className="col">
                {`Review ${index} goes here`}
              </div>
            </div>
            )
          })}
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

