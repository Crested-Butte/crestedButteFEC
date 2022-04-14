import React, { useState, useEffect } from "react";
import Stars from '../sharedComponents/starRatings.js';
const axios = require('axios');

const ProductInfo = (props) => {

  const [product, setProduct] = useState(props.productInfo)
  const [originalPrice, setOriginalPrice] = useState(props.productInfo.original_price)
  const [salePrice, setSalePrice] = useState(props.productInfo.sale_price)
  const [styleId, setStyleId] = useState(props.productInfo.style_id)
  const [reviewData, setReviewData] = useState();
  const [productId, setProductId] = useState(props.productId)
  const [score, setScore] = useState();


  const price = (product) => {
    if (!product) {
      return <div>loading...</div>
    } else {
      if (product.sale_price === null) {
        return <h6>${originalPrice}</h6>
      } else {
        return <h6><span className="original">${originalPrice}</span><span className="sale">${salePrice}</span> </h6>
      }
    }
  }

  const getReviews = (productId) => {
    return axios.get(`/reviews/meta?product_id=${productId}`)
      .then(({ data }) => {
        setReviewData(data.ratings)
        if(reviewData){
          const total =  Object.values(reviewData).reduce((a, b) => Number(a) + Number(b))
          const ratings = (
            Object.values(reviewData)
              .map((num, i) => Number(num) * Number(i + 1))
              .reduce((pre, cur) => pre + cur)/total
          ).toFixed(1);
          setScore(ratings)
        }
      })
  }

  useEffect(() => {
    if (productId !== props.productId) {
      setProductId(props.productId);
      getReviews(productId);
    } else {
      getReviews(productId);
    }

    if (styleId !== props.productInfo.style_id) {
      setProduct(props.productInfo);
      setOriginalPrice(props.productInfo.original_price);
      setSalePrice(props.productInfo.sale_price);
      setStyleId(props.productInfo.style_id)
    }
  }, [props.productId])

  // console.log(score)
  // console.log(Object.values(reviewData))
  return (
    <div className="product">
      <Stars rating = {score}/>
      <div className="category">
        <h5>{props.category}</h5>
      </div>
      <div className="product-name">
        <h2><b>{props.name}</b></h2>
      </div>
      <div className="product-price">
        {product ? price(product) : <div>loading...</div>}
      </div>
    </div>
  )
}

export default ProductInfo