import React, { useState, useEffect } from "react";

function ProgressBar(props) {

  let {starName, ratings, sumData} = props;
  console.log(sumData);

  const containerStyles = {
    height: 10,
    width: '100%',
    backgroundColor: 'grey',
    borderRadius: 50,
    margin: 5
  }

  const fillerStyles = {
    height: '100%',
    width: `${ratings/sumData*100}%`,
    backgroundColor: 'green',
    borderRadius: 'inherit',
    textAlign: 'right'
  }

  return (
    <div className = "flex-right-container ratings col-6">
      <div>
        <h6 className = "ratings-stars">Stars</h6>
      </div>
      <div style={containerStyles}>
        <div style={fillerStyles}></div>
      </div>
      <div>
        <h6>{ratings}</h6>
      </div>
    </div>
  );
}

export default ProgressBar;