import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';
import thunk from 'redux-thunk';

export default () => {
  const reducer = combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  });

  // Use compose if DEVTOOLS extension does not exist
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  // Use composeEnhancer to combine using Redux devtools with
  // Redux thunk (for connecting Redux store with Firebase database)
  // and asynchronous actions
  const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
  return store;
};
