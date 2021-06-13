'use strict';

function calcAge(birthYear) {
    const age = new Date().getFullYear() - birthYear;
    console.log(firstName);
    function printAge() {
      const output = `You are age ${age}, born in ${birthYear}`;
        console.log(output);
        
        if (birthYear >= 1981 && birthYear <= 1996) {
            const str = `Oh, you are a Millenial, ${firstName}`;
            console.log(str)
        
        }
    }
    printAge();
    return age;

}


const firstName = 'Jonas';

calcAge(1991);
console.log(calcAge(1976));

