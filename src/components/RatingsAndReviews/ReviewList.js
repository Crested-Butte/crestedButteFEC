import React, {useState,useEffect} from 'react';
import ReviewTile from './ReviewTile.js';
const axios = require('axios');

function ReviewList(props) {
  const [reviewData, setReviewData] = useState(null);
  const [productId, setProductId] = useState();
  const [tilesShown, setTilesShown] = useState(2);
  const [moreTilesBtn, setMoreTilesBtn]  = useState(null);


  const getReviews = (sort = null) => {
    let paramsObj = {product_id: props.productId};
    if (sort) {
      paramsObj['sort'] = sort;
    }
    axios({
      method: 'get',
      url: '/reviews/',
      params: paramsObj
    })
      .then (res => {setReviewData(res.data.results)})
      .catch(err => console.log(err));
  }

  const handleShowTiles = (e) => {
    let newTiles = tilesShown + 2;
    setTilesShown(newTiles);
  }

  const handleChange= (e) => {
    getReviews(e.target.value);
  }

  const renderList= (arr, num) => {
    if (arr === undefined) {
      return (null)
    }else {
      return (
        <div>
          {      arr.slice(0,num).map((review, index) =>
      <ReviewTile
      key = {index}
      review = {review}
      />)}
        </div>
     )
    }
  }

  useEffect(() => {getReviews()},[])



  return (
    <div className = "flex-down-container ">
      <div style={{textAlign: "center"}}>
        <label>
        Sort
          <select defaultValue ="relevant" onChange={handleChange}>
            <option value="relevant">relavent</option>
            <option value="newest">newest</option>
            <option value="helpful">helpful</option>
          </select>
        </label>
      </div>
      <div className = "scroll-list">
        { reviewData ? renderList(reviewData,tilesShown) : <>laoding!</>}
        {(tilesShown >= 2 && tilesShown <= 4) ? <button onClick={()=> handleShowTiles(setTilesShown +2)}> Show More </button> : null}
      </div>
    </div>
  )
}

export default ReviewList;

