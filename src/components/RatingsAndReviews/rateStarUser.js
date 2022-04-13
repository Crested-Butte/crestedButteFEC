import React, {useState, useEffect} from 'react';


function RateStarUser(props) {
  const[selectStars, setSelectStars] = useState([0,0,0,0,0])

  const getStarIdx = (e) => {
    let starVal = Number.parseInt(e.target.attributes.value.value);
    let selected = new Array(starVal).fill(1);
    let nonSelected = new Array(5 - starVal).fill(0);
    let slectPlsnonSelct = [...selected,...nonSelected]
    setSelectStars(slectPlsnonSelct);
    props.onChange('ratings', starVal);
  }
  return (
    <div>
      {selectStars.map((star, idx) => {
          return (
              <div className="star-container"
                  key={idx}
                  onClick={getStarIdx}>
                  <div className="star-fill"
                    style={{"width" : `${parseInt(star*30)}px`}}>
                      <img className="star" value = {`${idx + 1}`} src="./data/star.png"></img>
                  </div>
              </div>
          );
      })}
    </div>
  )
}

  export default RateStarUser