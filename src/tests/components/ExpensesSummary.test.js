import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';
import getExpensesTotal from '../../selectors/getExpensesTotal';

test('Should display correctly without expenses', () => {
  const wrapper = shallow(<ExpensesSummary />);
  expect(wrapper).toMatchSnapshot();
});

test('Should display correctly with expenses', () => {
  const wrapper = shallow(
    <ExpensesSummary
      expenseCount={expenses.length}
      expensesTotal={getExpensesTotal(expenses) / 100}
    />
  );
  expect(wrapper).toMatchSnapshot();
});
