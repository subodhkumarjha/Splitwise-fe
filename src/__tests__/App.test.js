import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import {shallow} from "enzyme/build";
import Expense from "../components/Expense";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("should rendered contacts component", () => {
  const appElement = shallow(<App/>);

  const expensesElement = appElement.find(Expense);

  expect(expensesElement).toHaveLength(1);

});
