import React, { useState, useEffect } from "react";
import ProgressBarRatings from './progressBarRatings.js';
import Stars from '../sharedComponents/starRatings';
const axios = require('axios');

function RatingBreakDown(props) {
  const [reviewData, setReviewData] = useState(null);
  const [productId, setProductId] = useState();
  const [aveData, setAveData] = useState();
  const [sumData, setSumData] = useState(null);

  const getRatingData = () => {
    axios({
      method: 'get',
      url: '/reviews/meta',
      params: {
        product_id: props.productId
      }
    })
      .then(res => {
        return res.data.ratings
      })
      .then(data => {
        const total = Object.values(data).reduce((pre, cur) => Number(pre) + Number(cur))
        const ratings = (
          Object.values(data)
            .map((num, i) => Number(num) * Number(i + 1))
            .reduce((pre, cur) => pre + cur) / total
        ).toFixed(1);
        setAveData(ratings);
        setReviewData(data);
        setSumData(Object.values(data).reduce((a, b) => (parseInt(a) + parseInt(b))))
      })
      .then(setProductId(props.productId))
      .catch(err => console.log(err));
  }

  useEffect( () => {
    getRatingData();
    setProductId(props.productId)
  }, [props.productId])

  console.log('inside radtings Breakdown', sumData)
  return (
    <React.Fragment>
      <div>
        <h1>Ratings and Reviews</h1>
      </div>
      <div className="flex-right-container">
        <div className="rating-score">
          {aveData ? aveData : null}
        </div>
        <div>
        </div>
      </div>
      <div className="flex-down-container ratings-breakdown">
        <div>
          {sumData ? <ProgressBarRatings starName={'1'} ratings={parseInt(reviewData[1])} sumData={sumData} /> : null}
        </div>
        <div>
          {sumData ? <ProgressBarRatings starName={'2'} ratings={parseInt(reviewData[2])} sumData={sumData} /> : null}
        </div>
        <div>
          {sumData ? <ProgressBarRatings starName={'3'} ratings={parseInt(reviewData[3])} sumData={sumData} /> : null}
        </div>
        <div>
          {sumData ? <ProgressBarRatings starName={'4'} ratings={parseInt(reviewData[4])} sumData={sumData} /> : null}
        </div>
        <div>
          {sumData ? <ProgressBarRatings starName={'5'} ratings={parseInt(reviewData[5])} sumData={sumData} /> : null}
        </div>
      </div>
    </React.Fragment>
  )
}

export default RatingBreakDown;