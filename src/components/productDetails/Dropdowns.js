import React, { useState, useEffect } from "react";

const Dropdowns = (props) => {
  return (
    <div className="product-dropdowns row">
      <div className="size col-6">
       <div><h6>Select Size:</h6></div>
        <select id="size">
          <option value="">SELECT SIZE</option>
        </select>
      </div>
      <div className="qty col-6">
      <div><h6>Quantity:</h6></div>
        <select id="qty">
          <option value="1">1</option>
        </select>
      </div>
    </div>
  )
}

export default Dropdowns