import React, {useState,useEffect} from 'react';

function SmallButton(props){
  return (
    <button type="button"
    onClick={props.onClick}
    className="btn btn-primary btn-sm">
      {props.btnName}
    </button>
  )
}

export default SmallButton;