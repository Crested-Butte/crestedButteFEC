import React, { useState, useEffect } from "react";
const axios = require('axios');


const RelatedItemCard = (props) => {
  const [id, setId] = useState()
  const[data, setData] =useState({})
  //console.log(props.product)
  //var id = props.product.id
  const styles = {
    item: {
      marginRight: 20
    }
  }
  var getData =  (id) => {
    var str = '/products/' + id;
    return axios.get(str).then( (response) => {
      console.log('data inside axios', response.data)
      setData(response.data)
    })
  }
  useEffect(() => {
    console.log('inside use effect of relatedItemCard')
    console.log(id, props.id)
    if (id !== props.id) {
      setId(props.id)
      getData(props.id)
    }
  })
  function renderData () {
    return (
      <div styles={styles.item}>
        <h4>category: {data.category}</h4>
        <h4>name: {data.name}</h4>
        <h4>price: {data.default_price}</h4>
        <button onClick={() => props.cb(id)} >Go to this item</button>
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