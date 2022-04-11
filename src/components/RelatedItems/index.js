import React, { useState, useEffect } from "react";
import RelatedItemCard from './RelatedItemCard.js'
const axios = require('axios');


const RelatedItems = (props) => {
  const [related, setRelated] = useState()
  const [id, setId] =useState()
  const styles = {
    header: {
      width: '100%'
    },
    wrapper: {
      borderTop: 'black solid 1px',
      display: 'flex',
      flexWrap: 'wrap'
    },
    item: {
      marginRight: 20
    }
  }
  var getRelated =  (str) => {
    var str = '/products/' + str + '/related'
    return axios.get(str).then( (response) => {
      setRelated(response.data.slice(0, 5))
    })
  }
  useEffect(() => {
    if (id !== props.product.id) {
      setId(props.product.id)
      getRelated(props.product.id)
    }
  })

  var  renderRelated = (relatedNums) => {
    return (
        relatedNums.map((num) => {
          return (
          <div key={num} style={styles.item}>
            <RelatedItemCard cb={props.cb} key={num} id={num.toString()}/>
          </div>
          )
        })
    )

  }

  return (
    <div style={styles.wrapper}>
      <h2 style={styles.header}>Related Items</h2>
      {related ? renderRelated(related) : <div>loading related</div>}
    </div>
  )
}

export default RelatedItems