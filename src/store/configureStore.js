import { combineReducers, createStore } from 'redux';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';

export default () => {
  const reducer = combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer,
  });

  /* eslint-disable no-underscore-dangle */
  const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  /* eslint-enable */
  return store;
};
