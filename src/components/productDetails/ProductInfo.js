import React, { useState, useEffect } from "react";
import Stars from '../sharedComponents/starRatings.js';
const axios = require('axios');

const ProductInfo = (props) => {
  const [styleId, setStyleId] = useState(props.productInfo.style_id)
  const [score, setScore] = useState();


  const price = () => {
    if (!props.productInfo) {
      return <div>loading...</div>
    } else {
      if (props.productInfo.sale_price === null) {
        return <h6>${props.productInfo.original_price}</h6>
      } else {
        return <h6><span className="original">${props.productInfo.original_price}</span><span className="sale">${props.productInfo.sale_price}</span> </h6>
      }
    }
  }

  const getReviews = () => {
    return axios.get(`/reviews/meta?product_id=${props.productId}`)
      .then(({ data }) => {
        const total = Object.values(data.ratings).reduce((pre, cur) => Number(pre) + Number(cur))
        const ratings = (
          Object.values(data.ratings)
            .map((num, i) => Number(num) * Number(i + 1))
            .reduce((pre, cur) => pre + cur) / total
        ).toFixed(1);
        setScore(ratings)
      })
  }

  useEffect(() => {
    getReviews();
  }, [props.productId])

  return (
    <div className="product">
      <div className="star-ratings">
        <Stars rating={score} />
        <p><a href="#add-question">Read all reviews</a></p>
        <div className="clear"></div>
      </div>
      <div className="category">
        <h5>{props.category}</h5>
      </div>
      <div className="product-name">
        <h2><b>{props.name}</b></h2>
      </div>
      <div className="product-price">
        {props.productInfo ? price() : <div>loading...</div>}
      </div>
    </div>
  )
}

export default ProductInfo