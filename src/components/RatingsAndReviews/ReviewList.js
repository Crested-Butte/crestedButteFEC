import React, { useState, useEffect } from 'react';
import ReviewTile from './ReviewTile.js';
const axios = require('axios');

function ReviewList(props) {
  const [reviewData, setReviewData] = useState(null);
  const [filteredData, setFilteredData] = useState(null)
  const [productId, setProductId] = useState();
  const [tilesShown, setTilesShown] = useState(2);
  const [moreTilesBtn, setMoreTilesBtn] = useState(null);


  console.log('inside Review List', filteredData)

  const filterDataByStar = (arr, starVal) => {
    if (!starVal) {
      setFilteredData(arr)
    } else {
      let filtered = arr.filter(val => val.rating === Number.parseInt(starVal));
      setFilteredData(filtered);
    }
  }


  const getReviews = (sort = null, count = 100) => {
    let paramsObj = { product_id: props.productId};
    if (sort) {
      paramsObj['sort'] = sort;
    }
    if (count ) {
      paramsObj['count'] = count;
    }
    axios({
      method: 'get',
      url: '/reviews/',
      params: paramsObj,
    })
      .then(res => {
        filterDataByStar(res.data.results)
        setReviewData(res.data.results) })
      .then(setProductId(props.productId))
      .catch(err => console.log(err));
  }

  const handleShowTiles = (e) => {
    let newTiles = tilesShown + 2;
    (newTiles < 5) ? setTilesShown(newTiles) : setTilesShown(filteredData.length);
  }

  const handleChange = (e) => {
    getReviews(e.target.value);
  }

  const renderList = (arr, num) => {
    if (arr === undefined) {
      return (null)
    } else {
      return (
        <div>
          {arr.slice(0, num).map((review, index) =>
            <ReviewTile
              key={index}
              review={review}
            />)}
        </div>
      )
    }
  }

  useEffect( () => {
    getReviews();
    setProductId(props.productId)
  }, [props.productId])


  useEffect(() => {
    filterDataByStar(reviewData, props.starFilter)
  },[props.starFilter]);

  return (
    <div className="flex-down-container reviews-container">
      <div className="sort">
        <label>
          Sort
        </label>
        <div className="sort-dropdown">
          <select defaultValue="relevant" onChange={handleChange}>
            <option value="relevant">relevant</option>
            <option value="newest">newest</option>
            <option value="helpful">helpful</option>
          </select>
        </div>
      </div>
      <div className="scroll-list">
        {filteredData ? renderList(filteredData, tilesShown) : <>loading!</>}
        <div className="show-more-btn">
        {(tilesShown >= 2 && tilesShown <= 4) ? <button onClick={() => handleShowTiles(setTilesShown + 2)}> Show More </button> : null}</div>
      </div>
    </div>
  )
}

export default ReviewList;

