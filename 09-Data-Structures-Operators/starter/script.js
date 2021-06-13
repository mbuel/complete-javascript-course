'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

let [main, , secondary] = restaurant.categories;

[main, secondary] = [secondary, main];
console.log(main, secondary);

console.log(restaurant.order(2, 0));

const nested = [2, 4, [5, 6]];

const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values set

const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];

for (const item of menu) {
  console.log(item);
}

for (const item of menu.entries()) console.log(item);

for (const day of Object.keys(restaurant.openingHours)) {
  console.log(day);
}


const rest = new Map();

rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
rest.set(2, 'Lisbon, Portugal');

// console.log(rest);

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

// const gameEvents = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

// //1 array 'events'

// let events = [...new Set(gameEvents.values())];
// console.log(events);

// console.log(gameEvents.delete(64));

// let average = 0;
// for (const [key, value] of gameEvents) {
//   let halfStr = key > 45 ? `[Second Half]` : `[First Half]`;
//   console.log(`${halfStr} ${key}: ${value}`);
// }
// average = 90 / gameEvents.size;

// console.log(`An event happened, on average, every ${average} minutes`);

const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);

[...airline].forEach(element => {
  console.log(element);
});

console.log(airline.slice(airline.indexOf('A')));

const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log('You got the middle seat! 😵');
  } else {
    console.log('You got blessed! 🤯');
  }
}

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('Jonas'));

const announcement = 'All passengers come to boarding door 23. Boarding door 23!!'

console.log(announcement.replaceAll('door', 'gate'));

const maskCreditCard = function (number) {
  const str = String(number);
  const padLength = str.length - 4;
  return str.slice(-4).padStart(padLength, '*');
}

console.log(maskCreditCard('4344563534653465534534'));
console.log(maskCreditCard(463534653465534534));

const message2 = 'Bad weather ... All Departures Delayed...';

const planesInLine = function (n) {
  console.log(`there are ${n} planes in line ${'✈️ '.repeat(n)}`)
}

planesInLine(4);