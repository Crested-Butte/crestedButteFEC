import React, { useState, useEffect } from "react";

function ShowPics(props) {

  let{photos} = props;

  return (
    <div className="upload-photo">
        <div className = "flex-right-container">
          <div className = "style-selector col-2">
            {photos[0] && <img src={photos[0]}/>}
          </div>
          <div className = "style-selector col-2">
            {photos[1] && <img src={photos[1]}/>}
          </div>
          <div className = "style-selector col-2">
            {photos[2] && <img src={photos[2]}/>}
          </div>
          <div className = "style-selector col-2">
            {photos[3] && <img src={photos[3]}/>}
          </div>
          <div className = "style-selector col-2">
            {photos[4] && <img src={photos[4]}/>}
          </div>
        </div>
    </div>
  );

}




export default ShowPics;