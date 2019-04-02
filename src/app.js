import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

store.dispatch(
  addExpense({
    description: 'Water bill',
    amount: 25300
  })
);

store.dispatch(
  addExpense({
    description: 'Gas bill',
    amount: 15200,
    createdAt: 768435
  })
);

store.dispatch(
  addExpense({
    description: 'Rent',
    amount: 70600,
    createdAt: 1230000
  })
);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.querySelector('#app'));
