import React, { useState, useEffect } from "react";
const axios = require('axios');


const RelatedItemCard = (props) => {
  const [id, setId] = useState()
  const [data, setData] = useState({})
  const [images, setImages] = useState()

  //console.log(props.product)
  //var id = props.product.id

  var getData = (id) => {
    var str = '/products/' + id;
    return axios.get(str).then((response) => {
      // console.log('data inside axios', response.data)
      setData(response.data)
    })
  }

  var getImage = (str) => {
    var str = '/products/' + str + '/styles';
    return axios.get(str).then((response) => {
      if (!response.data.results[0].photos[0].url) {
        setImages('./data/no-image.png')
      } else {
        setImages(response.data.results[0].photos[0].url)
      }
    })
  }


  useEffect(() => {
    // console.log('inside use effect of relatedItemCard')
    // console.log(id, props.id)
    if (id !== props.id) {
      setId(props.id)
      getData(props.id)
      getImage(props.id)
    }
  }, [props.id])

  function onMouseEnter(e) {
    $(".item" + e.target.name).addClass("hover");
  }

  function onMouseLeave(e) {
    $(".item-info").removeClass("hover");
  }



  function renderData() {
    return (
      <div className="item" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} >
        <div className="item-image">
        <div className={"item-info item" + props.value} >
          <h6>{data.category}</h6>
          <h5>{data.name}</h5>
          <h6>${data.default_price}</h6>
        </div>
          <img onClick={() => { props.cb(id); $('.style-selector img').removeClass('selected'); $('.style-selector .image0').addClass('selected'); }}  name={props.value} src={images}></img>

        </div>

      </div>
    )
  }

  return (
    <div>
      {data ? renderData() : <div>Loading Item</div>}
    </div>
  )
}

export default RelatedItemCard