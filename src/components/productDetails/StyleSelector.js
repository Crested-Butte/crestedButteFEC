import React, { useState, useEffect } from "react";

const StyleSelector = (props) => {

  const [selector, setSelector] = useState();

  const handleStyleClick = (e) => {
     props.handleClick(e.target.value)
  }

  return (
    <div className="style-selector col-3">
      <button onClick ={handleStyleClick} value ={props.style.style_id}>style selector</button>
    </div>
  )
}

export default StyleSelector