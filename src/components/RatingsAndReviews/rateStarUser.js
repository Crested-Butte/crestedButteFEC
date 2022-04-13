import React, {useState, useEffect} from 'react';


  function RateStarUser(props) {
    const[selectStars, setSelectStars] = useState([0,0,0,0,0])

    const getStarIdx = (e) => {
      console.log(e);
    }

    return (
      <div>
        {selectStars.map((star, idx) => {
            return (
                <div className="star-container"
                    key={idx}
                    id={`star`}
                    value='2'
                    onClick={getStarIdx}>
                    <div className="star-fill"
                      style={{"width" : `${parseInt(star*30)}px`}}>
                        <img className="star" value = '2' src="./data/star.png"></img>
                    </div>
                </div>
            );
        })}
      </div>
    )
  }

  export default RateStarUser