///////////////////////////////////////
// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
const btn = document.getElementsByTagName('button')[0];

const text = document.getElementsByTagName('textarea')[0];

text.value = `underscore_case
 first_name
Some_Variable
  calculate_AGE
delayed_departure`;

console.log(btn);
btn.addEventListener('click', e => {
  console.log(text.value);

  const fields = [];

  for (let [i, element] of text.value.toLowerCase().split('\n').entries()) {
    let field = '';
    let fieldLower = element.split('_');
    fieldLower[1] = fieldLower[1].replace(
      fieldLower[1][0],
      fieldLower[1][0].toUpperCase()
    );

    field = fieldLower.join('').trim();

    const padLength = field.length;
    field = field.padEnd(20, ' ');

    fields.push(field);

    console.log(`${field}${'✅'.repeat(Number(i) + 1)}`);
  }

  console.log(fields);
});
