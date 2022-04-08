import React, { useState, useEffect } from "react";

const FavoriteOutfits = (props) => {

  const [styleId, setStyleId] = useState(props.productInfo.style_id)

  useEffect(() => {
    if (styleId !== props.productInfo.style_id) {
      setStyleId(props.productInfo.style_id)
    }
  }, [styleId])

  const handleClick = (e) => {
    console.log(e.target.id)
      props.handleFavoriteStyle(e.target.id)
  }

  return (
    <div>
      {styleId? <button id={styleId} onClick={handleClick}>< i className="fas fa-heart" ></i ></button > : <div>loading...</div>}
      </div>
  )
}

export default FavoriteOutfits

// onClick={handleFavoriteStyle}