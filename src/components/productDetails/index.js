import React, { useState, useEffect } from "react";
import StyleSelector from "./StyleSelector.js"
import ProductInfo from "./ProductInfo.js"
import Dropdowns from "./Dropdowns.js"
import ImageGallery from "./ImageGallery.js"
import FavoriteOutfits from "./FavoriteOutfits.js"
import ProductDescription from "./ProductDescription.js"
const axios = require('axios');

const ProductDetails = (props) => {

    const [styles, setStyles] = useState({});
    const [styleId, setStyleId] = useState();
    const [productInfo, setProductInfo] = useState();
    const [favoriteStyles, setFavoriteStyles] = useState([]);
    const [product, setProduct] = useState(props.product);

    const getStyles = (str) => {
        str = str || props.productId
        return axios.get(`/products/${str}/styles`)
            .then(({ data }) => {
                setStyles(data.results);
                let hasDefault = false;
                data.results.map((style, index) => {
                    if (style['default?'] === true) {
                        setProductInfo(style)
                        hasDefault = true;
                    }
                })
                if (hasDefault === false) {
                    setProductInfo(data.results[0])
                }
            }
            )
    }
    useEffect(() => {
        getStyles();
        if (product !== props.product) {
            setProduct(props.product)
        }
    }, [props.productId])


    const handleClick = (id) => {
        const selectedStyle = [];
        styles.map(item => {
            if (item.style_id == id) {
                selectedStyle.push(item);
            }
        })
        setProductInfo(selectedStyle[0]);

    }

    const renderStyles = (styles) => {
        if (!styles) {
            return <div>loading...</div>
        } else {
            return styles.map((style, index) =>
                <StyleSelector  productInfo = {productInfo} handleClick={handleClick} style={style} key={index} value={index}/>
            )
        }
    }

    const handleFavoriteStyle = (id) => {
        if (id) {
            if (favoriteStyles.length < 1) {
                setFavoriteStyles([...favoriteStyles, productInfo]);
            } else {
                const temp = [...favoriteStyles]
                for (let i = 0; i < temp.length; i++) {
                    if (id == temp[i].style_id) {
                        temp.splice(i, 1)
                        setFavoriteStyles(temp);
                        break;
                    } else {
                        setFavoriteStyles([...favoriteStyles, productInfo]);
                    }
                }
            }

        }
    }

    return (
        <div>
            <div className="social-media">
                <div className="row">
                    <div className="col-3"><i className="fab fa-twitter"></i></div>
                    <div className="col-3"><i className="fab fa-facebook"></i></div>
                    <div className="col-3"><i className="fab fa-instagram"></i></div>
                    <div className="col-3"> <i className="fab fa-youtube"></i></div>
                </div>
                <div className="clear"></div>
            </div>
            <div className="row">
                <div className="image-gallery col-7">
                    {productInfo ? <ImageGallery productInfo={productInfo} /> : <div>loading...</div>}

                </div>
                <div className="products col-5">
                    <div className="product-info">
                        {productInfo ? <ProductInfo category={props.product.category} name={props.product.name} productInfo={productInfo} /> : <div>loading...</div>}
                    </div>
                    <div className="styles row">
                        <h6>Styles</h6>
                        {styles.length && productInfo ? renderStyles(styles) : <div>loading...</div>}
                    </div>
                    <div className="dropdowns row">
                        {productInfo ? <Dropdowns productInfo={productInfo} /> : <div>loading...</div>}
                    </div>
                    <div className="add">
                        <button>ADD TO CART</button>
                    </div>

                    <div className="favorite">
                        {productInfo ? <FavoriteOutfits handleFavoriteStyle={handleFavoriteStyle} productInfo={productInfo} /> : <div>loading...</div>}
                    </div>
                </div>

            </div>
            <div className="product-description">
                {product ? <ProductDescription product={product} /> : <div>loading...</div>}
            </div>
        </div>
    )
}


export default ProductDetails;
