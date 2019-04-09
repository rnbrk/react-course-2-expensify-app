import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let startEditExpenseSpy;
let expense;
let history;
let startRemoveExpenseSpy;
let wrapper;

beforeEach(() => {
  startEditExpenseSpy = jest.fn();
  // eslint-disable-next-line prefer-destructuring
  expense = expenses[2];
  history = { push: jest.fn() };
  startRemoveExpenseSpy = jest.fn();
  wrapper = shallow(
    <EditExpensePage
      startEditExpense={startEditExpenseSpy}
      history={history}
      startRemoveExpense={startRemoveExpenseSpy}
      expense={expense}
    />
  );
});

test('Should render EditExpensePage', () => {
  expect(wrapper).toMatchSnapshot();
});

test('Should handle editExpense', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expense);
  expect(startEditExpenseSpy).toHaveBeenLastCalledWith(expense.id, expense);
  expect(history.push).toHaveBeenLastCalledWith('/');
});

test('Should handle removeExpense', () => {
  wrapper.find('button').simulate('click');
  expect(startRemoveExpenseSpy).toHaveBeenLastCalledWith(expense.id);
  expect(history.push).toHaveBeenLastCalledWith('/');
});
