import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyA2IDCtDQVh6P2pHqVFmq5fLPjj0mBW2v0',
  authDomain: 'expensify-1af4d.firebaseapp.com',
  databaseURL: 'https://expensify-1af4d.firebaseio.com',
  projectId: 'expensify-1af4d',
  storageBucket: 'expensify-1af4d.appspot.com',
  messagingSenderId: '257469147819'
};

firebase.initializeApp(config);

const database = firebase.database();

// Events different from 'value'
// More info here:
// https://firebase.google.com/docs/reference/js/firebase.database.Reference

// 'child_removed'
database.ref('expenses').on('child_removed', snapshot => {
  console.log(snapshot.key, snapshot.val());
});

// 'child_changed'
database.ref('expenses').on('child_changed', snapshot => {
  console.log(snapshot.key, snapshot.val());
});

// 'child_added'
database.ref('expenses').on('child_added', snapshot => {
  console.log(snapshot.key, snapshot.val());
});

// Some examples

database.ref('expenses').on('value', snapshot => {
  const expenses = [];
  snapshot.forEach(childSnapshot => {
    expenses.push({
      id: childSnapshot.key,
      ...childSnapshot.val()
    });
  });
  console.log(expenses);
});

database
  .ref('expenses')
  .once('value')
  .then(snapshot => {
    const expenses = [];
    snapshot.forEach(childSnapshot => {
      expenses.push({
        id: childSnapshot.key,
        ...childSnapshot.val()
      });
    });
    console.log(expenses);
  });
