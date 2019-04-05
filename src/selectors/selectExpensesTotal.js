const selectExpensesTotal = (expenses = []) =>
  expenses.reduce((acc, expense) => acc + expense.amount, 0);

export default selectExpensesTotal;
