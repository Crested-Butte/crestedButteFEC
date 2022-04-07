import React, {useState,useEffect} from 'react';

function YesNoRadioButton(props){
  return (
    <div className="btn-group btn-group-toggle" data-toggle="buttons">
      <label className="btn btn-primary btn-floating">
        <input type="radio" name="options" id="option1" autoComplete="off"/> Yes
      </label>
      <label className="btn btn-primary btn-floating">
        <input type="radio" name="options" id="option2" autoComplete="off"/> No
      </label>
    </div>
  )
}

export default YesNoRadioButton;
