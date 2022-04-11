import React, { useState, useEffect } from "react";
const axios = require('axios');


const RelatedItemCard = (props) => {
  const [id, setId] = useState()
  const[data, setData] =useState({})
  const styles = {
    item: {
      marginRight: 20
    }
  }
  var getData =  (id) => {
    var str = '/products/' + id;
    return axios.get(str).then( (response) => {
      setData(response.data)
    })
  }
  useEffect(() => {
    if (id !== props.id) {
      setId(props.id)
      getData(props.id)
    }
  })
  function renderData () {
    return (
      <div onClick={() => props.cb(id)} styles={styles.item}>
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