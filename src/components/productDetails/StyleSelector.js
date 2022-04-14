import React, { useState, useEffect } from "react";
// import FavoriteOutfits from "./FavoriteOutfits.js"

const StyleSelector = (props) => {
  const [selector, setSelector] = useState();
  const [imageSelector, setImageSelector] = useState();
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    $('.style-selector .image0').addClass('selected');
    $('.favorite .image0').addClass('showBtn');
  }, [])

  const handleStyleClick = (e) => {
    props.handleClick(e.target.id);
    $('.image-thumbnails').animate(
      { scrollTop: 0 }, 500);
    $('.style-selector img').removeClass('selected');
    $('#' + e.target.id).addClass('selected');
    $('.favorite button').removeClass('showBtn');
    $('.favorite .' + e.target.name).addClass('showBtn');
  }

  const handleWishListClick = (e) => {
    setLiked(!liked)
    if (!liked) {
      $('.showBtn .fas').addClass('liked');
    } else {
      $('.showBtn .fas').removeClass('liked');
    }
    props.handleFavoriteStyle(e.target.id)
  }

  const render = () => {
    return <img name={"image" + props.value} className={"image" + props.value} src={props.style.photos[0].thumbnail_url || "./data/no-image.png"} onClick={handleStyleClick} id={props.style.style_id}></img>
  }

  const renderWishlist = () => {
    return <button onClick={handleWishListClick} className={"image" + props.value}>< i className="fas fa-heart" id={props.productInfo.style_id}></i ></button >
  }

  return (
    <React.Fragment>

      <div className="style-selector col-2">
        {render()}
      </div >
      <div className="favorite">
        {renderWishlist()}
      </div>
    </React.Fragment>
  )
}

export default StyleSelector