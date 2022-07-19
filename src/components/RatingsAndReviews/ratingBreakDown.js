import React, { useState, useEffect } from "react";
import ProgressBarRatings from './progressBarRatings.js';
import Stars from '../sharedComponents/starRatings';
const axios = require('axios');

function RatingBreakDown(props) {
  const [reviewData, setReviewData] = useState(null);
  const [aveData, setAveData] = useState();
  const [sumData, setSumData] = useState(null);

  let {productId, starFilterChange} = props;

  const getRatingData = () => {
    axios({
      method: 'get',
      url: '/reviews/meta',
      params: {
        product_id: productId
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
      .catch(err => console.log(err));
  }

  useEffect(() => {
    getRatingData();
  }, [productId])

  return (
    <React.Fragment>
      <div>
        <h1>Ratings and Reviews</h1>
      </div>
      <div className="row ave-star-ratings">
        <div className="col-12 rating-score-container">
          <div className="rating-score">
            {aveData ? aveData : null}
          </div>
        </div>
        <div className="col-12 stars-rating-bar-container">
          <div className="stars-rating-bar">
            <Stars rating={aveData} />
          </div>
          <div>
          </div>
        </div>
      </div>
      <div className="flex-down-container ratings-breakdown">
        <div>
          {sumData ? <ProgressBarRatings starName={'1'} onClick={starFilterChange} ratings={parseInt(reviewData[1])} sumData={sumData} /> : null}
        </div>
        <div>
          {sumData ? <ProgressBarRatings starName={'2'} onClick={starFilterChange} ratings={parseInt(reviewData[2])} sumData={sumData} /> : null}
        </div>
        <div>
          {sumData ? <ProgressBarRatings starName={'3'} onClick={starFilterChange} ratings={parseInt(reviewData[3])} sumData={sumData} /> : null}
        </div>
        <div>
          {sumData ? <ProgressBarRatings starName={'4'} onClick={starFilterChange} ratings={parseInt(reviewData[4])} sumData={sumData} /> : null}
        </div>
        <div>
          {sumData ? <ProgressBarRatings starName={'5'} onClick={starFilterChange} ratings={parseInt(reviewData[5])} sumData={sumData} /> : null}
        </div>
      </div>
    </React.Fragment>
  )
}

export default RatingBreakDown;