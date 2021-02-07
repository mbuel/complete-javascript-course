'use strict';

const bookings = [];

// ES5 way of doing this
// const createBooking = function (flightNum, numPassengers, price) {
//   numPassengers = numPassengers || 1;
//   price = price || 199;
//   flightNum = flightNum || 1;

//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// ES6+
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};
const flight = 'LH123';
createBooking('LH123', 5);

const morris = {
  name: 'Morris Buel',
  passport: 3423532535,
};

const checkin = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 3423532535) {
    console.warn('checked in !');
  } else {
    console.warn('WRONG PASSPORT');
  }
};

// checkin(flight, morris);
console.log(flight, morris);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000);
};

// newPassport(morris);
// checkin(34, morris);

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(/ /g);
  return [first.toUpperCase(), ...others].join(' ');
};

// higher order function
const transformer = function (str, fn) {
  return fn(str);
};

console.log(transformer('Javascript is the best.', upperFirstWord));
console.log(transformer('Javascript is the best.', oneWord));

const greet = greeting => name => console.log(`${greeting} ${name}`);

const hey = greet('Hey');

hey('Morris');
console.clear();

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Jonas Schmedtman');
lufthansa.book(635, 'Morris Buel');

console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// book(23, 'Sarah Williams');

book.call(eurowings, 23, 'Sarah Williams');
book.apply(lufthansa, [24, 'Morris Buel']);

console.log(lufthansa, eurowings);

const bookLW = book.bind(lufthansa);
const bookEW = book.bind(eurowings);

// with event listeners

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVat = addTax.bind(null, 0.23);

console.log(addVat(100));
console.log(addVat(23));

console.clear();

// polled application

///////////////////////////////////////
// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

// 0. Create poll object

const poll = {
  question: 'What is your favorite programming language?',
  options: ['0: Javascript', '1: Python', '2: Rust', '3: C++'],
  answers: new Array(4).fill(0),
};

// 1. create method bound to poll object

poll.displayResults = function (type) {
  console.log(typeof type);
  typeof type === 'object' && Array.isArray(type) && console.log(type);
  typeof type === 'string' && console.log(`Poll results are ${type}`);
};

poll.registerNewAnswer = function () {
  let answer = Number(
    prompt(
      `${this.question} \n${this.options.reduce(
        (acc, cur) => acc + '\t' + cur + '\n',
        ''
      )}\nWrite option number:`
    )
  );
  this.answers[answer]++;
  this.displayResults(this.answers);
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

// IIFE

(function () {
  console.log('This will never run.');
})();

// Function create scopes

// IIFE creates a scope that has no outside access, and cannot be later modified

// IIFE were primarily used to mask scope, before ES6

// Closures
const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(passengerCount);
  };
};

const person = function () {
  let name = '';
  let birthYear = 0;

  return {
    setBirthYear: y => {
      birthYear = y;
    },
    setName: n => {
      name = n;
    },
    toString() {
      console.log(`${name} was born ${birthYear}`);
    },
  };
};

const meb = person();
meb.setBirthYear(1976);
meb.setName('Morris');
meb.toString();
const booker = secureBooking();

booker();

console.warn('closures');
// Closures continued

let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
h();
f();

console.dir(f);

const boardPassengers = function (n, wait) {
  const perGroup = n / 3;
  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are three groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`we will start boarding in ${wait} seconds.`);
};

boardPassengers(180, 10);
boardPassengers(360, 11);
boardPassengers(720, 12);

///////////////////////////////////////
// Coding Challenge #2

/* 
This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

GOOD LUCK 😀
*/

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();

