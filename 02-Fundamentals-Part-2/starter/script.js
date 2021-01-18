"use strict";

let hasDriversLicense = false;

const passTest = true;

if (passTest) 
    hasDriversLicense = true;


if (hasDriversLicense) 
    console.log("I can drive.");


function logger(message) {
    console.warn("======================");
    console.log(message);
    console.warn("======================");
}

const getAge = (birthYear) => new Date().getFullYear() - birthYear;

const yearsUntilRetirement = (birthYear) => {
    return 65 - getAge(birthYear);
};

const birth = 1976;

console.log(`Mike V. was born in ${birth} and has ${
    yearsUntilRetirement(birth)
} years until he can retire.`);

const inheritsThis = () => console.log(this.top);

const privateThis = function () {
    console.log(this);
};

function privaterThis() {
    inheritsThis();
}

inheritsThis();

privateThis();

privaterThis();

const dice = () => Math.trunc(Math.random() * 6) + 1;
let currentRoll = 0;
while ((currentRoll = dice()) !== 6) {

    console.log(`You rolled a ${currentRoll}`);
}
