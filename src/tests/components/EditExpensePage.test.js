import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let editExpenseSpy, expense, history, removeExpenseSpy, wrapper;

beforeEach(() => {
  editExpenseSpy = jest.fn();
  expense = expenses[2];
  history = { push: jest.fn() };
  removeExpenseSpy = jest.fn();
  wrapper = shallow(
    <EditExpensePage
      editExpense={editExpenseSpy}
      history={history}
      removeExpense={removeExpenseSpy}
      expense={expense}
    />
  );
});

test('Should render EditExpensePage', () => {
  expect(wrapper).toMatchSnapshot();
});

test('Should handle editExpense', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expense);
  expect(editExpenseSpy).toHaveBeenLastCalledWith(expense.id, expense);
  expect(history.push).toHaveBeenLastCalledWith('/');
});

test('Should handle removeExpense', () => {
  wrapper.find('button').simulate('click');
  expect(removeExpenseSpy).toHaveBeenLastCalledWith(expense.id);
  expect(history.push).toHaveBeenLastCalledWith('/');
});
