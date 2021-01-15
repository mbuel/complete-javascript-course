const calcTip = (bill) => {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bill1 = () => {
  const bill = 100;

  const tip = calcTip(bill);

  const total = tip + bill;

  console.log(
    `The bill was ${bill}, the tip was ${calcTip(
      bill
    )} the total value ${total}`
  );
};

const bill = [
  {
    amount: 22,
    calcTip: function () {
      return this.amount >= 50 && this.amount <= 300
        ? this.amount * 0.15
        : this.amount * 0.2;
    },
    calcTotal: function () {
      return this.calcTip() + this.amount;
    },
  },
];

bill.push({
  amount: 295,
  calcTip: function () {
    return this.amount >= 50 && this.amount <= 300
      ? this.amount * 0.15
      : this.amount * 0.2;
  },
  calcTotal: function () {
    return this.calcTip() + this.amount;
  },
});
bill.push({
  amount: 176,
  calcTip: function () {
    return this.amount >= 50 && this.amount <= 300
      ? this.amount * 0.15
      : this.amount * 0.2;
  },
  calcTotal: function () {
    return this.calcTip() + this.amount;
  },
});
bill.push({
  amount: 440,
  calcTip: function () {
    return this.amount >= 50 && this.amount <= 300
      ? this.amount * 0.15
      : this.amount * 0.2;
  },
  calcTotal: function () {
    return this.calcTip() + this.amount;
  },
});
bill.push({
  amount: 37,
  calcTip: function () {
    return this.amount >= 50 && this.amount <= 300
      ? this.amount * 0.15
      : this.amount * 0.2;
  },
  calcTotal: function () {
    return this.calcTip() + this.amount;
  },
});
bill.push({
  amount: 105,
  calcTip: function () {
    return this.amount >= 50 && this.amount <= 300
      ? this.amount * 0.15
      : this.amount * 0.2;
  },
  calcTotal: function () {
    return this.calcTip() + this.amount;
  },
});
bill.push({
  amount: 10,
  calcTip: function () {
    return this.amount >= 50 && this.amount <= 300
      ? this.amount * 0.15
      : this.amount * 0.2;
  },
  calcTotal: function () {
    return this.calcTip() + this.amount;
  },
});
bill.push({
  amount: 1100,
  calcTip: function () {
    return this.amount >= 50 && this.amount <= 300
      ? this.amount * 0.15
      : this.amount * 0.2;
  },
  calcTotal: function () {
    return this.calcTip() + this.amount;
  },
});
bill.push({
  amount: 86,
  calcTip: function () {
    return this.amount >= 50 && this.amount <= 300
      ? this.amount * 0.15
      : this.amount * 0.2;
  },
  calcTotal: function () {
    return this.calcTip() + this.amount;
  },
});
bill.push({
  amount: 52,
  calcTip: function () {
    return this.amount >= 50 && this.amount <= 300
      ? this.amount * 0.15
      : this.amount * 0.2;
  },
  calcTotal: function () {
    return this.calcTip() + this.amount;
  },
});

const bill4 = (bills) => {
  bills.forEach((element) => {
    console.log(
      `This bill is ${
        element.amount
      } and the tip is ${element.calcTip()} and the total bill is ${element.calcTotal()}`
    );
  });
};

const bill2 = () => {
  const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

  const tips = bills.map((bill) => calcTip(bill));
  console.log(tips);
  let i = 0;
  const totals = tips.map((tip, i) => bills[i++] + tip);

  console.log(
    `The bills are ${bills}, the tips are ${tips} the totals are ${totals}`
  );
};

const bill3 = () => {
  const bill = 430;

  const tip = calcTip(bill);

  const total = tip + bill;

  console.log(
    `The bill was ${bill}, the tip was ${calcTip(
      bill
    )} the total value ${total}`
  );
};

bill1();
bill2();
bill3();
bill4(bill);
