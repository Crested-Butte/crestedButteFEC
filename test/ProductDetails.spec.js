/**
 * @jest-environment jsdom
 */

 import React from 'react';
 import renderer from 'react-test-renderer';
 import { render, unmountComponentAtNode } from "react-dom";
 import { act } from "react-dom/test-utils";
 import $ from 'jquery';
 import data from './data.js';
 import ReactDOM from "react-dom";

 import ProductDetails from '../src/components/productDetails/index.js';

 it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ProductDetails product = {data} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("adds Item to cart", () => {
  let button = null
  act(() => {
    return new Promise ((resolve, reject) => {
      resolve(ReactDOM.render(<ProductDetails product = {data}/>, container))
    })
  })
  .then(() => document.querySelector("[data-testid=addToCart"))
  .then(result => expect(result.innerHTML).toBe("ADD TO CART"));
});
