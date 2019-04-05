import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import getExpensesTotal from '../selectors/getExpensesTotal';

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => (
  <div>
    <p>{`Viewing ${expenseCount} expenses`}</p>
    <p>{`Totaling ${numeral(expensesTotal).format('$0,0.00')}`}</p>
  </div>
);

const mapStateToProps = state => ({
  expenseCount: state.expenses.length,
  expensesTotal: getExpensesTotal(state.expenses) / 100
});

export default connect(mapStateToProps)(ExpensesSummary);
