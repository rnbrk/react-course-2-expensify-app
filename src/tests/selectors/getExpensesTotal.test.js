import selectExpensesTotal from '../../selectors/selectExpensesTotal';
import expenses from '../fixtures/expenses';

test('Should return 0 if no expenses', () => {
  const total = selectExpensesTotal();
  expect(total).toBe(0);
});

test('Should correctly add up a single expense', () => {
  const total = selectExpensesTotal([expenses[0]]);
  expect(total).toBe(expenses[0].amount);
});

test('Should correctly add up multiple expenses', () => {
  const total = selectExpensesTotal(expenses);
  let testTotal = 0;
  for (let i = 0; i < expenses.length; i += 1) {
    testTotal += expenses[i].amount;
  }
  expect(total).toBe(testTotal);
});
