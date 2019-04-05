import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = props => (
  <div>
    {props.expenses.length === 0 ? (
      <p>No expenses</p>
    ) : (
      props.expenses.map(expense => <ExpenseListItem key={expense.id} {...expense} />)
    )}
    {}
  </div>
);

// MAP REDUX STATE TO THE PROPS (CALLBACK)
// WILL UPDATE EVERY TIME SOMETHING CHANGES TO THE STATE
const mapStateToProps = state => ({
  expenses: selectExpenses(state.expenses, state.filters)
});

// CONNECT TO THE STORE WITH
// FUNCTION (returns)-> HIGHER ORDER COMPONENT (returns)-> REACT COMPONENT
export default connect(mapStateToProps)(ExpenseList);
