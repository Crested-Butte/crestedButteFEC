import React, {useState,useEffect} from 'react';

function YesNoRadioButton(props){
  const[selectbtn, setSelectbtn] = useState(false);
  const[selectChnge, setSelectChnge] = useState();

  const handlebuttonChange = (e) => {
    setSelectbtn(e.target.value)
    props.onChange(e);
  }

  console.log(selectbtn)

  return (
    <div>
      <div className="form-check">
        <label>
          <input
            type="radio"
            id="like"
            name="yes"
            value="yes"
            onChange = {handlebuttonChange}
            checked = {selectbtn === 'yes'}
            className="form-check-input"
          />
          yes
        </label>
      </div>

      <div className="form-check">
        <label>
          <input
            type="radio"
            id="like"
            name="no"
            value="no"
            onChange = {handlebuttonChange}
            checked = {selectbtn === 'no'}
            className="form-check-input"
          />
          no
        </label>
      </div>
    </div>
  )
}

export default YesNoRadioButton;
