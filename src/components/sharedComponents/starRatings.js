 import React, {useState, useEffect} from 'react';

 function Stars(props) {

  let rating = props.rating || 0;
  let fullNumber = Number.parseInt(rating);
  let fraction= rating - fullNumber;
  let roundedDec = 0;
  let starArr = [0,0,0,0,0];

  if (fraction >= 0 && fraction < 12.5) {
    roundedDec = 0;
  } else if (fraction >= 12.5 && fraction < 0.375) {
    roundedDec = 0.25;
  } else if (fraction >= 0.375 && fraction < 0.625) {
    roundedDec = 0.5;
  } else if (fraction >= 0.625 && fraction < 0.875) {
    roundedDec = 0.75;
  } else {
    roundedDec = 1.0;
  }

  for (let i = 0; i < 5; i++) {
    if (i < fullNumber) {
      starArr[i] = 1;
    } else if (i === fullNumber && fraction !== 0) {
      starArr[i] = roundedDec;
    }
  }






  return (
    <div>
      {starArr.map((item, i) => {
          return (
              <div className="star-container" key={i}>
                  <div className="star-fill" style={{"width" : `${parseInt(item*31)}px`}}>
                      <img className="star" src="./data/star.png" alt="stars alt"></img>
                  </div>
              </div>
          );
      })}
    </div>
  )
 }

 export default Stars