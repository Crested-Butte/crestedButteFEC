import React, { useState, useEffect } from "react";

function ProgressBarRatings(props) {

  let {starName, ratings, sumData} = props;

  console.log(props.onChange)

  const selectStarFilter = () => {
    props.onClick(starName);
  }

  const containerStyles = {
    height: 10,
    width: '100%',
    backgroundColor: 'grey',
    margin: 5
  }

  const fillerStyles = {
    height: '100%',
    width: `${ratings/sumData*100}%`,
    backgroundColor: '#fdb52d',
    textAlign: 'right'
  }

  return (
    <div className = "flex-right-container ratings" value = {`${props.starName}`} onClick = {selectStarFilter}>
      <div>
        <h6 className = "ratings-stars">{`${props.starName}`} Stars</h6>
      </div>
      <div style={containerStyles}>
        <div style={fillerStyles}></div>
      </div>
      <div className="ratings-count">
        <h6>{ratings || 0}</h6>
      </div>
    </div>
  );
}

export default ProgressBarRatings;