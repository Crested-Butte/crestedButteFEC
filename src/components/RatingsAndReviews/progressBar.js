import React, { useState, useEffect } from "react";

function ProgressBar(props) {

  let {ratings, sumData} = props;
  console.log(sumData);

  const containerStyles = {
    height: 20,
    width: '100%',
    backgroundColor: 'grey',
    borderRadius: 50,
    margin: 50
  }

  const fillerStyles = {
    height: '100%',
    width: `${ratings/sumData*100}%`,
    backgroundColor: 'green',
    borderRadius: 'inherit',
    textAlign: 'right'
  }

  return (
      <div style={containerStyles}>
        <div style={fillerStyles}>
        </div>
      </div>
  );
}

export default ProgressBar;