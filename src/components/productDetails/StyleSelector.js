import React, { useState, useEffect } from "react";

const StyleSelector = (props) => {
  const [selector, setSelector] = useState();
  const [imageSelector, setImageSelector] = useState();

  useEffect(() => {
    $('.style-selector .image0').addClass('selected');
  }, [])

  const handleStyleClick = (e) => {
    props.handleClick(e.target.id);
    $('.image-thumbnails').animate(
      { scrollTop: 0 }, 500);
    $('.style-selector img').removeClass('selected');
    $('#' + e.target.id).addClass('selected');
  }

  const render = () => {
    return <img className={"image" + props.value} src={props.style.photos[0].thumbnail_url} onClick={handleStyleClick} id={props.style.style_id}></img>
  }

  return (
    <div className="style-selector col-2">
      {render()}
    </div >
  )
}

export default StyleSelector