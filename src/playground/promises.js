const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Oh noes.');
  }, 5000);
});

console.log('Before');

promise.then(
  data => {
    console.log('1', data);
  },
  error => {
    console.log('Error:', error);
  }
);

console.log('After');
