 import React, {useState, useEffect} from 'react';


// function StarIcon(props) {
//   return (
//     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="bi bi-star" viewBox="0 0 16 16">
//     <path fill="grey" d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
//     <path fill={prop.fill} d= "m 7.765 12.095 l -3.686 1.894 l 0.694 -3.957 a 0.565 0.565 0 0 0 -0.163 -0.505 L 1.71 6.745 l 4.052 -0.576 a 0.525 0.525 0 0 0 0.393 -0.288 L 8 2.223 l 1.847 3.658 a 0.525 0.525 0 0 0 0.393 0.288 l 4.052 0.575 l -2.906 2.77 a 0.565 0.565 0 0 0 -0.163 0.506 l 0.694 3.957 l -3.686 -1.894 a 0.503 0.503 0 0 0 -0.461 0"/>
//   </svg>
//   )
// }



// function StarRating() {
//   const {
//     index,
//     rating,
//     hoverRating,
//     onMouseEnter,
//     onMouseLeave,
//     onSaveRating,
//   } = props;
//   const fill = React.useMemo(() => {
//     if (hoverRating >= index) {
//       return 'yellow';
//     } else if (!hoverRating && rating >= index) {
//       return 'yellow';
//     }
//     return 'none';
//   }, [rating, hoverRating, index]);
//   return (
//       <div
//         className ="cursor-pointer"
//         onMouseEnter={() => onMouseEnter(index)}
//         onMouseLeave={() => onMouseLeave()}
//         onClick={() => onSaveRating(index)}>
//         <StarIcon fill={fill} />
//       </div>
//   )
// }

// function StarRatingPanel() {
//   const [rating, setRating] = React.useState(0);
//   const [hoverRating, setHoverRating] = React.useState(0);
//   const onMouseEnter = (index) => {
//     setHoverRating(index);
//   };
//   const onMouseLeave = () => {
//     setHoverRating(0);
//   };
//   const onSaveRating = (index) => {
//     setRating(index);
//   };
//   return(
//     <div className="box flex">
//       {[1, 2, 3, 4, 5].map((index) => {
//         return (
//           <StarRating
//             index={index}
//             rating={rating}
//             hoverRating={hoverRating}
//             onMouseEnter={onMouseEnter}
//             onMouseLeave={onMouseLeave}
//             onSaveRating={onSaveRating} />
//         )
//       })}
//     </div>
//   );
// }
// export default StarRatingPanel;


function FiveStars (props) {

  [rating, setRating] = useState(0);
  [ratingEntry, setRatingEntry] = useState("");

  function handleChange(event) {
    event.preventDefault();
    this.setState({
      ratingEntry: event.target.value
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    this.setState({
      rating: this.state.ratingEntry,
      ratingEntry: ""
    });
  }
  return (
  <div>
    <DynamicStars/>
    <QuarterStars rating={rating}/>
    <div onSubmit={handleSubmit}>
    <label>
      Rating: {this.state.rating} <br/>
      <input type="text" name="rating" value={ratingEntry} onChange={handleChange}/>
    </label>
    <input type="submit" value="Submit" />
  </div>
  </div>
  )
}


function QuarterStars(props) {
    let rating = props.rating || 0;
    let stars = [];
    while (stars.length < 5) {
        if (rating > 1) {
            stars.push(1);
        } else if (rating > 0) {
            let empty = Math.abs(0 - rating);
            let quart = Math.abs(0.25 - rating);
            let half = Math.abs(0.5 - rating);
            let three = Math.abs(0.75 - rating);
            let full = Math.abs(1 - rating);
            let closest = Math.min(empty, quart, half, three, full);
            switch (closest) {
                case (empty):
                    stars.push(0);
                    break;
                case quart:
                    stars.push(0.28);
                    break;
                case half:
                    stars.push(0.5);
                    break;
                case three:
                    stars.push(0.72);
                    break;
                case full:
                    stars.push(1.0);
                    break;
                default:
                    console.log("OOPS");
                    stars.push(0);
                    break;
            }
        } else {
            stars.push(0);
        }
        rating = rating - 1;
    }
    return (
        <div>
            <h1>Fill Stars to Nearest Quarter</h1>
            {stars.map((item, i) => {
                return (
                    <div className="single-star-container" key={i}>
                        <div className="single-star-fill" style={{"width" : `${parseInt(item*31)}px`}}>
                            <img className="single-star-outline" src="star.png" alt="stars alt"></img>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};



function DynamicStars(props) {
  [starsArr, setStarsArr] = useState([0,0,0,0,0]);
  [oldArr, setOldArr] = useState([0,0,0,0,0]);


    function handleStarsHover(event) {
      event.preventDefault();
      let rating = parseInt(event.target.getAttribute("value"))+1;
      let newArr = [];
      while (newArr.length < 5) {
          if (rating > 0) {
              rating--;
              newArr.push(1);
          } else {
              newArr.push(0);
          }
      }
      setStarsArr(newArr)
    }

    function handleStarsClick(event) {
        event.preventDefault();
        setOldArr(starsArr)
    }

    function handleStarsLeave(event) {
        event.preventDefault();
        this.setState({
            starsArr: this.state.oldArr
        });
    }

  return (
    <div>
      <h1>Rate out of 5 Stars</h1>
      {starsArr.map((item, i) => {
          return (
              <div className="single-star-container" value={i} key={i} onMouseOver={this.handleStarsHover} onClick={this.handleStarsClick} onMouseLeave={this.handleStarsLeave}>
                  <div className="single-star-fill" style={{"width":`${parseInt(item*31)}px`}}>
                      <img className="single-star-outline" src="star.png" value={i} ></img>
                  </div>
              </div>
          );
        })}
    </div>
    );
}
