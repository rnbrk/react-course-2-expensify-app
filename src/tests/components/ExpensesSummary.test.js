import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('Should display correctly without expenses', () => {
  const wrapper = shallow(<ExpensesSummary />);
  expect(wrapper).toMatchSnapshot();
});

test('Should display correctly with expenses', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={5} expensesTotal={346} />);
  expect(wrapper).toMatchSnapshot();
});
