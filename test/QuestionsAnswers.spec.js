/**
 * @jest-environment jsdom
 */

 import React from 'react';
 import renderer from 'react-test-renderer';
 import $ from 'jquery';
 import QuestionsAnswers from '../src/components/questionsAnswers/index.js';
 import data from './data.js'
 import ReactDOM from "react-dom";

 it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<QuestionsAnswers product = {data} />, div);
  ReactDOM.unmountComponentAtNode(div);
});