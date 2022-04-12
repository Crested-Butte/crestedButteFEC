import React, { useState, useEffect } from "react";
import RelatedItemCard from './RelatedItemCard.js'
const axios = require('axios');


const RelatedItems = (props) => {
  const [related, setRelated] = useState()

  const [id, setId] =useState()

  const styles = {

    wrapper: {
      borderTop: 'black solid 1px',
      display: 'flex',
      flexWrap: 'wrap'
    },
    item: {
      marginRight: 20
    }
  }
  var getRelated = (str) => {
    var str = '/products/' + str + '/related'

    return axios.get(str).then((response) => {
      //console.log(response.data)
      setRelated(response.data.slice(0, 4))


  }

  useEffect(() => {
    if (id !== props.product.id) {
      setId(props.product.id)
      getRelated(props.product.id)
    }
  })

  var renderRelated = (relatedNums) => {
    return (

      relatedNums.map((num,index) =>
          <div className="item-container col-3" key={index}>
            <RelatedItemCard cb={props.cb} id={num.toString()} value ={index}/>


          </div>
      )
    )
  }

  return (
    <div>
      <div className="related-header">
        <h1>Related Items</h1>
        <div className="arrow-container">
          <div className="arrow"></div>
        </div>
      </div>
      <div className="related-product row">
        {related ? renderRelated(related) : <div>loading related</div>}
      </div>
    </div>
  )
}

export default RelatedItems