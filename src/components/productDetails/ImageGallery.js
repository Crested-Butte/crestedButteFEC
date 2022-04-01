import React, { useState, useEffect } from "react";

const ImageGallery = (props) => {

  return (
    <div className="slides">
<img width="100%" src={props.productInfo.photos[0].url}></img>
    </div>
  )
}

export default ImageGallery