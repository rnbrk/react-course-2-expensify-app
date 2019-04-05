import React from 'react';
import ExpenseListConnect from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummary from './ExpensesSummary';

const ExpenseDashboardPage = () => (
  <div>
    <ExpenseListFilters />
    <ExpensesSummary />
    <ExpenseListConnect />
  </div>
);

export default ExpenseDashboardPage;
