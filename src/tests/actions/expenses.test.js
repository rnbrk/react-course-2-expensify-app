import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('Should set up removeExpense action object', () => {
  const action = removeExpense('123abc');
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  });
});

test('Should set up editExpense action object', () => {
  const action = editExpense('123abc', { note: 'Text change' });
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates: {
      note: 'Text change'
    }
  });
});

test('Should set up addExpense action object', () => {
  const expenseData = {
    description: 'Rent',
    amount: 70695,
    createdAt: 1000,
    note: 'The rent for march'
  };

  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  });
});

test('Should set up addExpense action object with default values', () => {
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description: '',
      note: '',
      amount: 0,
      createdAt: 0
    }
  });
});
