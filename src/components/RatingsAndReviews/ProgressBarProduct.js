import React, { useState, useEffect } from "react";

function ProgressBarProduct(props) {


  let data = props.data;
  let key = Object.keys(data)[0];
  let val = Object.values(data)[0]

  console.log(val)

  const containerStyles = {
    height: 10,
    width: '100%',
    backgroundColor: 'grey',
    borderRadius: 50,
    margin: 5
  }

  const fillerStyles = {
    height: '100%',
    width: '10px',
    marginLeft: `${val/5*100}%`,
    borderRadius: '0px',
    textAlign: 'right',
    borderStyle: 'solid',
    borderWidth: '10px 10px 20px 10px',
    borderColor: 'green transparent transparent transparent'
  }

  return (
    <React.Fragment>
        <div className = "flex-right-container ratings">
      <div style={containerStyles}>
        <div style={fillerStyles}></div>
      </div>
    </div>
    <div className = "row">
      <div className = 'col-6'>
        test1
      </div>
      <div className = 'col-6' style ={{textAlign: 'right'}}>
        test2
      </div>
    </div>
    </React.Fragment>

  );
}

export default ProgressBarProduct;