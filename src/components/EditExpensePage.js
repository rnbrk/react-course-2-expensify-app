import React from 'react';
import { connect } from 'react-redux';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';
import ExpenseForm from './ExpenseForm';

export class EditExpensePage extends React.Component {
  onSubmit = expense => {
    this.props.startEditExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  };

  onClick = () => {
    this.props.startRemoveExpense(this.props.expense.id);
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <ExpenseForm expense={this.props.expense} onSubmit={this.onSubmit} />
        <button type="button" onClick={this.onClick}>
          Remove
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
  startRemoveExpense: id => dispatch(startRemoveExpense(id))
});

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find(expense => expense.id === props.match.params.id)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditExpensePage);
