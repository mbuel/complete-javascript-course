'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
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

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////

// LECTURES
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];


const createUserNames = function (accounts) {
  accounts.forEach((account, i) => {
    let user = account.owner;
    account.username = user
      .toLocaleLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

const eurToUsd = 1.1;

const movementsUSD = movements.map(mov => mov * eurToUsd);

const movementsUSDfor = [];
for (const mov of movements) {
  movementsUSDfor.push(mov * eurToUsd);
}

console.log(movementsUSD);

const moves = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${mov}`
);

console.log(moves.join('\n'));

createUserNames(accounts);

const deposits = movements.filter(val => val > 0);
const withdrawals = movements.filter(val => val < 0);

const balance = movements.reduce((acc, cur) => acc + cur);

const accountProcessor = function (account) {
  return {
    getDeposits() {
      const deposits = account.movements
        .filter(val => val > 0)
        .reduce((acc, cur) => acc + cur);
      return deposits;
    },
    getWithdrawals() {
      const withdrawal = account.movements
        .filter(val => val < 0)
        .reduce((acc, cur) => acc + cur);
      return withdrawal;
    },
    getBalance() {
      return account.movements.reduce((acc, cur) => acc + cur);
    },
    getMovements(sort) {
      let movements = account.movements.slice();
      if (sort) {
        movements.sort((a, b) => a - b);
      }
      return movements
        .map((mov, i) => {
          const direction = mov > 0 ? 'deposit' : 'withdrawal';
          return `
        <div class="movements__row" key=${i}>
          <div class="movements__type movements__type--${direction}" > ${
            i + ' ' + direction
          }</div >
          <div class="movements__value">${mov}€</div>
        </div>\n`;
        })
        .reverse()
        .join('');
    },
    getInterest() {
      return account.movements.reduce((sum, mov) => {
        let interest = 0;
        if (mov > 0) {
          interest = (mov * account.interestRate) / 100;
          interest = interest >= 1 ? interest : 0;
        }
        return (sum += interest);
      }, 0);
    },
  };
};
let sortEnabled = false;
let loggedInAccount;
let accountData;
const setLoggedInAccount = function (account) {
  if (account) {
    loggedInAccount = account;
    accountData = accountProcessor(account);
    return true;
  }
  return false;
};

btnSort.addEventListener('click', e => {
  e.preventDefault();
  sortEnabled = !sortEnabled;
  renderAccount(sortEnabled);
});

/**
 * Renders banking account to screen
 * @param {*} account
 */
const renderAccount = function (sort = false) {
  containerMovements.innerHTML = ''; // reset transactions
  inputCloseUsername.value = '';
  containerMovements.innerHTML = accountData.getMovements(sort);

  labelSumIn.innerHTML = accountData.getDeposits();
  labelSumOut.innerHTML = accountData.getWithdrawals();
  labelBalance.innerHTML = accountData.getBalance() + ' EUR';
  labelSumInterest.textContent = `${accountData.getInterest()}€`;
};

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();

  const username = inputLoginUsername.value;
  const userPin = Number(inputLoginPin.value);

  if (setLoggedInAccount(verifyLogIn(username, userPin)) === true) {
    !containerApp.className.includes('display')
      ? containerApp.classList.toggle('display')
      : null;
    labelWelcome.textContent = `Welcome back, ${
      loggedInAccount.owner.split(' ')[0]
    }`;

    renderAccount();
  } else {
    logOut();
  }
  inputLoginUsername.value = '';
  inputLoginPin.value = '';
});

const verifyLogIn = function (username, pin) {
  const currentAccount = accounts.find(acc => acc.username === username);
  console.log(currentAccount, currentAccount?.pin === pin);
  return currentAccount?.pin === pin && currentAccount;
};

const logOut = function () {
  containerApp.className.includes('display')
    ? containerApp.classList.toggle('display')
    : null;
  labelWelcome.textContent = `Log in to get started`;
  setLoggedInAccount(null);
};

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );

  if (
    amount > 0 &&
    receiverAcc &&
    amount <= accountData.getBalance() &&
    receiverAcc?.username !== loggedInAccount?.username
  ) {
    console.log(`transfer valid`);
    loggedInAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    renderAccount();
    inputTransferAmount.value = '';
    inputTransferTo.value = '';
  } else {
    // invalid transfer
    console.log(`invalid transfer`);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const determinatePercentage = 0.1;
  const loanAmt = Number(inputLoanAmount.value);

  if (
    loggedInAccount.movements.some(
      val => loanAmt >= determinatePercentage * val
    )
  ) {
    console.log('valid loan.');
    // add to account
    loggedInAccount.movements.push(loanAmt);
    // update display
    renderAccount();
  } else {
    // display error?
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  const userToDelete = inputCloseUsername.value;
  const pinToDelete = Number(inputClosePin.value);
  if (
    verifyLogIn(userToDelete, pinToDelete) &&
    loggedInAccount.username === userToDelete &&
    loggedInAccount.pin === pinToDelete
  ) {
    const idxToDelete = accounts.indexOf(loggedInAccount);
    accounts.splice(idxToDelete, 1);
    logOut();
  }
});

// every only returns true if all elements passes the test specified

console.log(account4.movements.every(mov => mov > 0));

const arr = [[1, 2, 3], [4, 5, 6], 7, 8];

console.log(arr.flat());