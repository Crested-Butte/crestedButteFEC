/**
 * @jest-environment jsdom
 */

import React from 'react';
import renderer from 'react-test-renderer';
import $ from 'jquery';
import App from '../src/App.js'
import ReactDOM from "react-dom";




describe('App', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<App
    />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});