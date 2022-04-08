import React, { useState, useEffect } from "react";

const ProductInfo = (props) => {

  const [product, setProduct] = useState(props.productInfo)
  const [originalPrice, setOriginalPrice] = useState(props.productInfo.original_price)
  const [salePrice, setSalePrice] = useState(props.productInfo.sale_price)
  const [styleId, setStyleId] = useState(props.productInfo.style_id)

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

  useEffect(() => {
    if (styleId !== props.productInfo.style_id) {
      setProduct(props.productInfo);
      setOriginalPrice(props.productInfo.original_price);
      setSalePrice(props.productInfo.sale_price);
      setStyleId(props.productInfo.style_id)
    }
  })

  return (
    <div className="product">
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