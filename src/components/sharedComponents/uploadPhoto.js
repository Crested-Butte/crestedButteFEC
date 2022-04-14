import React, { useState, useEffect } from "react";

function UploadPhoto(props) {
  const [photos, setPhoto] = useState([])

  const handleChange = e => {
    if (e.target.files.length) {
      setPhoto(
        [...photos, URL.createObjectURL(e.target.files[0])],
        );
    }
  };

  useEffect(
     () => {
      props.onChange('photo',photos);
    }, [photos]
  )


  return (
    <div className="upload-photo">
      <input type="file" onChange={handleChange}/>
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

export default UploadPhoto;