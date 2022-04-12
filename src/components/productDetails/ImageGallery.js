import React, { useState, useEffect } from "react";
import Images from "./Images.js"
import ImageThumbnails from "./ImageThumbnails.js"

const ImageGallery = (props) => {
  const [styleId, setStyleId] = useState(props.productInfo.style_id)
  const [imageIndex, setImageIndex] = useState(0);
  const [expand, setExpand] = useState(false);


  useEffect(() => {
    if (styleId !== props.productInfo.style_id) {
      setImageIndex(0)
      setStyleId(props.productInfo.style_id)
    }
  })

  const onClickPrev = () => {
    if (imageIndex === 0) {
      setImageIndex(props.productInfo.photos.length - 1)
      $('.image-thumbnails').animate(
        { scrollTop: $('.thumbnail').height() * (props.productInfo.photos.length - 1) }, 500);
    } else {
      setImageIndex(imageIndex - 1)
      $('.image-thumbnails').animate(
        { scrollTop: $('.thumbnail').height() * (imageIndex - 1) }, 500);
    }

  }

  const onClickNext = () => {
    if (imageIndex === props.productInfo.photos.length - 1) {
      setImageIndex(0)
      $('.image-thumbnails').animate(
        { scrollTop: 0 }, 500);
    }
    else {
      setImageIndex(imageIndex + 1)
      $('.image-thumbnails').animate(
        { scrollTop: $('.thumbnail').height() * imageIndex }, 500);
    }
  }

  const onClickThumbnail = (id) => {
    setImageIndex(Number(id))
  }

  const style = { 'visibility': 'visible', 'opacity': '1' }
  const styleHidden = { 'visibility': 'hidden', 'opacity': '0' }
  const styleThumbnails = { 'opacity': '0.3' }

  const onClickZoomIn = () => {
    setExpand(!expand);
  }

  return (
    <div className="row">
      <div className="col-2 thumbnails-container">
        <div className="prev">
          <button onClick={onClickPrev}><i className="fas fa-solid fa-angle-up"></i></button>
        </div>
        <div className="image-thumbnails" id="image-thumbnails">
          {props.productInfo.photos.map((photo, index) => {
            if (index === imageIndex) {
              return <ImageThumbnails style={style} onClickThumbnail={onClickThumbnail} value={index} photo={photo} key={index} />
            }
            else {
              return <ImageThumbnails style={styleThumbnails} onClickThumbnail={onClickThumbnail} value={index} photo={photo} key={index} />
            }
          })
          }
        </div>
        <div className="next">
          <button onClick={onClickNext}><i className="fas fa-solid fa-angle-down"></i></button>
        </div>
      </div>
      <div className="col-10">
        <div className={!expand ? "slides" : "slides-expand"}>
          <div className="main-image">
            {props.productInfo.photos.map((photo, index) => {
              if (index === imageIndex) {
                return <Images style={style} photo={photo} key={index} />
              }
              else {
                return <Images style={styleHidden} photo={photo} key={index} />
              }
            })
            }
            <button onClick={onClickZoomIn} className="expand-btn"><i className="fas fa-expand"></i></button>
            <div className="arrow-btns row">
              <div className="prev col-6">
                <button onClick={onClickPrev}><i className="fas fa-solid fa-angle-left"></i></button>
              </div>
              <div className="next col-6">
                <button onClick={onClickNext}><i className="fas fa-solid fa-angle-right"></i></button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ImageGallery