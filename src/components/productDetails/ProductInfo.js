import React, { useState, useEffect } from "react";

const ProductInfo = (props) => {
  return (
    <div className="product">
      <div className="category">
        <h5>{props.category}</h5>
      </div>
      <div className="product-name">
        <h3><b>{props.name}</b></h3>
      </div>
      <div className="price">

      </div>
    </div>
  )
}

export default ProductInfo