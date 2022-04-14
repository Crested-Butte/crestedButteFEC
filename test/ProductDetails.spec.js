/**
 * @jest-environment jsdom
 */

 import React from 'react';
 import renderer from 'react-test-renderer';
 import $ from 'jquery';
 import ProductDetails from '../src/components/productDetails/index.js';
 import data from './data.js';
 import ReactDOM from "react-dom";

 it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ProductDetails product = {data} />, div);
  ReactDOM.unmountComponentAtNode(div);
});