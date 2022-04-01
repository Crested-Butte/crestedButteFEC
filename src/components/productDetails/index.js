import React, { useState, useEffect } from "react";
import StyleSelector from "./StyleSelector.js"
import ProductInfo from "./ProductInfo.js"
import Dropdowns from "./Dropdowns.js"
import ImageGallery from "./ImageGallery.js"
const axios = require('axios');

const ProductDetails = (props) => {

    const [productId, setProductId] = useState(props.product.id);
    const [styles, setStyles] = useState({});
    const [styleId, setStyleId] = useState();
    const [productInfo, setProductInfo] = useState()


    useEffect(() => {
        axios.get(`/products/${productId}/styles`)
            .then(({ data }) => {
                setStyles(data.results)
                setProductInfo(data.results[0])
            }
            )
    }, [productId])

    const renderStyles = (styles) => {
        if (!styles) {
            return <div>loading...</div>
        } else {
            return styles.map((style, index) => <StyleSelector handleClick={handleClick} style={style} key={index} />)
        }
    }

    const handleClick = (id) => {
        const selectedStyle = [];
        styles.map(item => {
            console.log(item.style_id)
            if (item.style_id == id) {
                selectedStyle.push(item)
            }
        })
        setProductInfo(selectedStyle[0])
    }

    console.log(productInfo)

    return (
        <div>
            <h1>Product Details</h1>

            <div className="row">
                <div className="image-gallery col-7">
                    {productInfo ? <ImageGallery productInfo={productInfo} /> : <div>loading...</div>}

                </div>
                <div className="product-details col-5">
                    <div className="product-info">
                        {productInfo ? <ProductInfo category={props.product.category} name={props.product.name} productInfo={productInfo} /> : <div>loading...</div>}
                    </div>
                    <div className="styles row">
                        <h6>Styles</h6>
                        {styles.length ? renderStyles(styles) : <div>loading...</div>}
                    </div>
                    <div className="dropdowns row">
                        <Dropdowns />
                    </div>
                    <div className="add">
                        <button>ADD TO CART</button>
                    </div>
                </div>

            </div>

        </div>
    )
}


export default ProductDetails;