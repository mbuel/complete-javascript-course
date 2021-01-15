"use strict";

const mark = {
  firstName: "Mark",
  height: 1.69,
  mass: 78,
  calcBMI: function () {
    return this.mass / this.height ** 2;
  },
};

const john = {
  firstName: "John",
  height: 1.95,
  mass: 92,
  calcBMI: function () {
    return this.mass / this.height ** 2;
  },
};

const compareBMI = (person1, person2) => {
  if (person1.calcBMI() > person2.calcBMI()) {
    console.log(
      `${person1.firstName} has a higher BMI: ${person1.calcBMI()} then ${
        person2.firstName
      } with a BMI: ${person2.calcBMI()}`
    );
  } else if (person2.calcBMI() > person1.calcBMI()) {
    console.log(
      `${person2.firstName} has a higher BMI: ${person2.calcBMI()} then ${
        person1.firstName
      } with a BMI: ${person1.calcBMI()}`
    );
  }
};

compareBMI(mark, john);
