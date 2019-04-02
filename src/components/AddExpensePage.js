import React from 'react';
import { connect } from 'react-redux';
import { addExpense } from '../actions/expenses';
import ExpenseForm from './ExpenseForm';

export class AddExpensePage extends React.Component {
  onSubmit = expense => {
    // dispatch(addExpense(expense));
    this.props.addExpense(expense); // Replaces line above
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <div>Add expense</div>
        <ExpenseForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

// This makes sure we can test this component easier
const mapDispatchToProps = dispatch => ({
  addExpense: expense => dispatch(addExpense(expense))
});

export default connect(
  undefined,
  mapDispatchToProps
)(AddExpensePage);
