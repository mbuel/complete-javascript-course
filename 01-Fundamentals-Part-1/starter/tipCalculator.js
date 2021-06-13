const tipCalculation = (bill) => {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bill1 = () => {
  const bill = 275;

  const tip = tipCalculation(bill);

  const total = tip + bill;

  console.log(
    `The bill was ${bill}, the tip was ${tipCalculation(
      bill
    )} the total value ${total}`
  );
};

const bill2 = () => {
  const bill = 40;

  const tip = tipCalculation(bill);

  const total = tip + bill;

  console.log(
    `The bill was ${bill}, the tip was ${tipCalculation(
      bill
    )} the total value ${total}`
  );
};

const bill3 = () => {
  const bill = 430;

  const tip = tipCalculation(bill);

  const total = tip + bill;

  console.log(
    `The bill was ${bill}, the tip was ${tipCalculation(
      bill
    )} the total value ${total}`
  );
};

bill1();
bill2();
bill3();
