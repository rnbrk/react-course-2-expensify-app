const expensesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [
        // Copies expenses array and adds an extra expense
        ...state,
        action.expense
      ];
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_EXPENSE':
      return state.map(expense =>
        expense.id === action.id
          ? {
              ...expense,
              ...action.updates
            }
          : expense
      );
    case 'SET_EXPENSES':
      return [...action.expenses];
    default:
      return state;
  }
};

export default expensesReducer;
