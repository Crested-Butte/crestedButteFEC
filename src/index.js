import React, { useState, useEffect } from "react";
import reactDom from "react-dom";
import QuestionsAnswers from './components/questionsAnswers/index.js';
import ProductDetails from './components/productDetails/index.js';
import RelatedItems from './components/RelatedItems/index.js';
import RatingsAndReviews from './components/RatingsAndReviews/index.js';

const axios = require('axios');
const TOKEN = require('../config.js');

const App = function () {
  const [productId, setProductId] = useState('37313')
  const [product, setProduct] = useState()
  const [clickData, setClickData] = useState([]);

  axios.defaults.baseURL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/';
  axios.defaults.headers.common['Authorization'] = TOKEN.TOKEN;

  function changeProductPage(str) {
    setProductId(str)
    getProduct(str)
  }
  function getProduct(str) {
    str = str || productId
    return axios.get('/products/' + str + '/')
      .then((response) => {
        setProduct(response.data)
      }
      )
  }

  function ClickTracker(event) {
    setClickData([
      ...clickData, {
      element: event.srcElement,
      time: event.timeStamp,
      module: event.path[event.path.length - 7].className
    }])
  }

  useEffect(() => {
    //document.addEventListener('mousedown',ClickTracker);
    if (!product) {
      getProduct()
    };
  })

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 150) {
      $(".sub-header").removeClass("display").animate({
        top: 0
      }, 0);
      $(".to-top").removeClass("display").animate({
        right: '20px'
      }, 0);
    } else {
      $(".sub-header").addClass("display").removeAttr("style");
      $(".to-top").addClass("display").removeAttr("style");
    }
  });

  function handleToTop() {
    $(window).scrollTop(0);
  }

  function handleAddToCart() {
    $('.shopping-cart .display').addClass('indicator')
  }

  return (
    <div>
      <div className="header">
        <div className="logo">
          <img src="./data/logo.png"></img>
        </div>
        <div className="title">
          <h1>CRESTED BUTTE</h1>
        </div>
        <div className="shopping-cart">
          <i className="fas fa-shopping-cart"></i>
          <div className="display">&nbsp;</div>
        </div>
        <div className="clear"></div>
      </div>
      <div className="sub-header header">
        <div className="logo">
          <img src="./data/darkLogo.png"></img>
        </div>
        <div className="title">
          <h1>CRESTED BUTTE</h1>
        </div>
        <div className="shopping-cart">
          <i className="fas fa-shopping-cart"></i>
          <div className="display">&nbsp;</div>
        </div>
        <div className="clear"></div>
      </div>

      <div className="product-details">
        {product ? <ProductDetails product={product} productId={productId} handleAddToCart={handleAddToCart} /> : <div>loading</div>}
      </div>

      <div className="related-items">
        {product ? <RelatedItems cb={changeProductPage} productId={productId} product={product} /> : <div>loading</div>}
      </div>

      <div className="questions-answers">
        {product ? <QuestionsAnswers product={product} /> : <div>loading</div>}
      </div>

      <div className="ratings-reviews">
        {product ? <RatingsAndReviews product={product} /> : <div>loading</div>}
      </div>

      <button onClick={handleToTop} className="to-top display"><i className="fas fa-arrow-up"></i></button>
      <div className="footer">
        <span className="terms">Terms of Service</span> <span className="privacy"> Privacy Policy</span> <span className="copyright">© 2022 Crested Butte, Inc.</span>
      </div>

    </div >
  )

}

reactDom.render(<App />, document.getElementById("root"))

export default App;
