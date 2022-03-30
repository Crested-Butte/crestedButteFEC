import React, { useState } from "react";
import reactDom from "react-dom";
import QuestionsAnswers from './components/questionsAnswers/index.js';
import ProductDetails from './components/productDetails/index.js';
import RelatedItems from './components/RelatedItems/index.js';
import RatingsAndReviews from './components/RatingsAndReviews/index.js';
const axios = require('axios');
const TOKEN = require('../config.js');

class App extends React.Component {
  constructor(props) {
    super(props);
    axios.defaults.baseURL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/';
    axios.defaults.headers.common['Authorization'] = TOKEN;
    this.state={
      data:[]
    }
  }


  render() {

    return (
      <div>
        <h1>Crested Butte</h1>

        <div className="product-details">
          <ProductDetails />
        </div>

        <div className="related-items">
          <RelatedItems />
        </div>

        <div className="questions-answers">
          <QuestionsAnswers />
        </div>

        <div className="ratings-reviews">
          <RatingsAndReviews />
        </div>

      </div >
    )
  }
}



reactDom.render(<App />, document.getElementById("root"))

// Product Detail - Critical Priority
// Related Items & Outfit Creation - High Priority
// Questions & Answers - High Priority
// Ratings & Reviews - High Priority


