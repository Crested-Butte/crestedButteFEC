/**
 * @jest-environment jsdom
 */

 import React from 'react';
 import renderer from 'react-test-renderer';
 import $ from 'jquery';
 import RelatedItems from '../src/components/RelatedItems/index.js';
 import data from './data.js'
 import ReactDOM from "react-dom";
 import {render, fireEvent, waitFor, screen} from '@testing-library/react';

 it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<RelatedItems product = {data} />, div);
  ReactDOM.unmountComponentAtNode(div);
});