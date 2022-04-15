import React, { useState, useEffect } from 'react';

function Stars(props) {

  let rating = props.rating || 0;
  let fullNumber = Math.round(rating * 100) / 100;
  let fraction = rating - fullNumber;
  let roundedDec = 0;
  let starArr = [0, 0, 0, 0, 0];

  // if (fraction >= 0 && fraction < 12.5) {
  //   roundedDec = 0;
  // } else if (fraction >= 12.5 && fraction < 0.375) {
  //   roundedDec = 0.25;
  // } else if (fraction >= 0.375 && fraction < 0.625) {
  //   roundedDec = 0.5;
  // } else if (fraction >= 0.625 && fraction < 0.875) {
  //   roundedDec = 0.75;
  // } else {
  //   roundedDec = 1.0;
  // }


  for (let i = 0; i < 5; i++) {
    if (fullNumber >= 1) {
      starArr[i] = 1;
    } else if (fullNumber < 1 && fullNumber > 0) {
      if (fullNumber >= 0.25 && fullNumber < 0.375) {
        starArr[i] = 0.25;
      } else if (fullNumber >= 0.375 && fullNumber < 0.625) {
        starArr[i] = 0.5;
      } else if (fullNumber >= 0.625 && fullNumber < 0.875) {
        starArr[i] = 0.75;
      }
    } else if (fullNumber <= 0) {
      starArr[i] = 0
    }

    fullNumber -= 1;
  }

  return (
    <div className="starArr">
      {starArr.map((star, idx) => {
        return (
          <div className="star-container" key={idx}>
            <div className="star-fill" style={{ "width": `${parseInt(star * 30)}px` }}>
              <img className="star" src="./data/star.png"></img>
            </div>
          </div>
        );
      })}
    </div>
  )
}

export default Stars