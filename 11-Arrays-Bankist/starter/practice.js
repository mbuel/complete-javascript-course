'use strict';

// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  getDeposits() {
    return movements.filter(val => val > 0);
  },
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

const allDeposits = accounts
  .flatMap(acc => acc.movements)
  .filter(val => val > 0)
  .reduce((sum, cur) => sum + cur, 0);

console.log(allDeposits);

const numDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);
//   .filter(mov => mov >= 1000).length;

console.log(numDeposits1000);

// 3.
const sums = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sum, cur) => {
      console.log(sum.deposits);
      sum[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
      return sum;
    },
    { deposits: 0, withdrawals: 0 }
  );

console.log(sums);

const convertTitleCase = function (title = '') {
  const exceptions = [
    'a',
    'an',
    'and',
    'to',
    'the',
    'but',
    'or',
    'on',
    'in',
    'is',
    'with',
  ];

  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word =>
      !exceptions.includes(word) ? word[0].toUpperCase() + word.slice(1) : word
    )
    .join(' ');

  return titleCase;
};

console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title but not too long.'));
