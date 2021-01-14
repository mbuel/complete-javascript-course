let js = "amazing";
if (js === "amazing") {
  console.warn("Javascript is fun!");
}
console.log(40 + 8 + 23 - 10);

function describeCountry(country, population, capitalCity) {
  console.log(
    `${country} has ${population} million people and its capital city is ${capitalCity}`
  );
  console.log(
    `${country} is ${percentageOfPopulation(
      population
    )}% of the total population.`
  );
}

const Test1 = () => {
  const massMark = 78;
  const massJohn = 92;
  const heightMark = 1.69;
  const heightJohn = 1.95;
  printBMI("Mark", getBMI(massMark, heightMark));
  printBMI("John", getBMI(massJohn, heightJohn));
};

const Test2 = () => {
  const massMark = 95;
  const massJohn = 85;
  const heightMark = 1.88;
  const heightJohn = 1.76;
  printBMI("Mark", getBMI(massMark, heightMark));
  printBMI("John", getBMI(massJohn, heightJohn));
};

const Test3 = () => {
  const massMark = 95;
  const massJohn = 85;
  const heightMark = 1.88;
  const heightJohn = 1.76;
  const MarksBMI = getBMI(massMark, heightMark);
  const JohnsBMI = getBMI(massJohn, heightJohn);

  const printStatement =
    MarksBMI > JohnsBMI
      ? "Mark's BMI is greater than John's"
      : "John's BMI is greater than Mark's";

  console.log(printStatement);
};

const percentageOfPopulation = (population) => {
  const totalPopulation = 7700;
  return (population / totalPopulation) * 100;
};

const getBMI = (mass, height) => {
  return mass / height ** 2;
};

const printBMI = (name, bmi) => {
  console.log(`${name} has a BMI of ${bmi}`);
};
