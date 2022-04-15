import React, { useState, useEffect } from "react";

function ProgressBarProduct(props) {


  let data = props.data;
  let key = Object.keys(data)[0];
  let val = Object.values(data)[0]



  const containerStyles = {
    height: 10,
    width: '100%',
    backgroundColor: 'grey',
    marginBottom:'2px'
  }

  const fillerStyles = {
    height: '100%',
    width: '10px',
    marginLeft: `${val/5*100}%`,
    borderRadius: '0px',
    textAlign: 'right',
    borderStyle: 'solid',
    borderWidth: '10px 10px 20px 10px',
    borderColor: '#fdb52d transparent transparent transparent'
  }

  let lowHigh = {
    Size: ['A size too small ',  'A size too wide'],
    Width: ['Too narrow', 'Too wide'],
    Comfort: ['Uncomfortable', 'Perfect'],
    Quality: ['Poor', 'Perfect'],
    Length: ['Runs short', 'Runs long'],
    Fit: ['Runs tight', 'Runs Long']
  }



  return (
    <div className="progress-bar-container">
      <div className="progress-bar-title">
        {key}
      </div>
        <div className = "flex-right-container ratings">
      <div style={containerStyles}>
        <div style={fillerStyles}></div>
      </div>
    </div>
    <div className = "row">
      <div className = 'col-6'>
        <p>{`${lowHigh[key][0]}`}</p>
      </div>
      <div className = 'col-6' style ={{textAlign: 'right'}}>
     <p>{`${lowHigh[key][1]}`}</p>
      </div>
    </div>
    </div>

  );
}

export default ProgressBarProduct;