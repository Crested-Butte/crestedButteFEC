import React, { useState, useEffect } from "react";

const ProductDescription = (props) => {



  return (
    <div className="description">
      <div className="row">
        <div className="col-7 slogan">
          <h4>{props.product.slogan}</h4>
          <p>{props.product.description}</p>
        </div>
        <div className="col-5 features">
          <ul>
            {props.product.features.map((feature, index) => {
              return <li key={index}>{feature.feature}: {feature.value}</li>
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ProductDescription