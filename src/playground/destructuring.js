//
// Object destructuring
//

// const person = {
//   name: 'Ron',
//   age: 31,
//   location: {
//     city: 'Hilversum',
//     temp: 2
//   }
// };

// const { name: firstName = 'Anonymous', age } = person;
// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//   console.log(`It's ${temperature} degrees C in ${city}.`);
// }

// const { name: publisherName = 'Self-published' } = book.publisher;
// console.log(publisherName);

//
// Array destructuring
//

// const address = ['Dassenlaan 34', 'Hilversum', 'Netherlands', '1216 EL'];
// const [, city, state = 'Stateless'] = address;
// console.log(`You are in ${city}, ${state}.`);


const item = ['coffee (iced)', '$2.00', '$2.50', '$2.75'];
const [itemName, , mediumPrice] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}`);
