import React, { useState, useEffect } from "react";

const ImageThumbnails = (props) => {

  const onClickImage = (e) => {
    props.onClickThumbnail(e.target.id)
  }

  return (
    <div className="thumbnail" >
      <img width="100%" onClick={onClickImage} id={props.value} style={props.style} index={props.value} src={props.photo.thumbnail_url}></img>
    </div>
  )
}

export default ImageThumbnails