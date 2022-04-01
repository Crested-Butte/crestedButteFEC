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
    axios.defaults.headers.common['Authorization'] = TOKEN.TOKEN;
    this.state = {
      product: []
    }

    this.getAll = this.getAll.bind(this);
  }

  getAll() {
    return axios.get('/products/37313')
      .then(({ data }) =>
        this.setState({
          product: data
        })
      )
  }

  componentDidMount() {
    this.getAll();
  }


  render() {
    console.log(this.state.products)
    return (
      <div>
        <h1>Crested Butte</h1>

        <div className="product-details">
          <ProductDetails product={this.state.product} />
        </div>

        <div className="related-items">
          <RelatedItems product={this.state.product} />
        </div>

        <div className="questions-answers">
          <QuestionsAnswers product={this.state.product} />
        </div>

        <div className="ratings-reviews">
          <RatingsAndReviews product={this.state.product} />
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


