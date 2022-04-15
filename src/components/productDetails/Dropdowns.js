import React, { useState, useEffect } from "react";

const Dropdowns = (props) => {
  const [styleId, setStyleId] = useState(props.productInfo.style_id)
  const [skus, setSkus] = useState();
  const [qty, setQty] = useState('DEFAULT');
  const [size, setSize] = useState('DEFAULT');

  useEffect(() => {
      setSkus(props.productInfo.skus)
  }, [props.productInfo.skus])

  useEffect(() => {
      setSize('DEFAULT');
      setQty('DEFAULT');
      setStyleId(props.productInfo.style_id)
  }, [props.productInfo.style_id])

  const handleChange = (e) => {
    setSize(e.target.value)
    Object.values(skus).map((sku, index) => {
      if (sku.size === e.target.value) {
        setQty(sku.quantity)
      }
    })
  }

  const selectDefault = (size) => {
    if (size === 'DEFAULT') {
      return <option value="DEFAULT" disabled>SELECT SIZE</option>
    }
  }

  const productQty = [];
  for (let i = 1; i <= qty; i++) {
    if (i <= 9) {
      productQty.push(i)
    }
  }

  return (
    <div className="product-dropdowns row">
      <div className="size col-6">
        <div><h6>Select Size</h6></div>
        <select id="size" onChange={handleChange} value={size}>
          {selectDefault(size)}
          {skus ? Object.values(skus).map((sku, index) => {
            return <option key={index} value={sku.size}>{sku.size}</option>
          }) : <>loading...</>}
        </select>
      </div>
      <div className="qty col-6">
        <div><h6>Quantity</h6></div>
        <select id="qty" defaultValue={productQty[0]}>

          {productQty.map((qty, index) => {

            if (productQty.length > 0) {
              return <option key={index} value={qty}>{qty}</option>
            } else {
              return <option disabled>OUT OF STOCK</option>
            }
          })}
        </select>
      </div>
    </div>
  )
}

export default Dropdowns