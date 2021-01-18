const genFunction = function* () {
  console.log('hello');
  yield;
  console.log('World');
  yield;
  console.log('And Galaxy');
};

const gObj = genFunction();

let arr = [
  'ES5',
  'ES6',
  'ES7',
  'ES8',
  'ES9',
  'ES10',
  'ES11',
  'ES6',
  'ES7',
  'ES8',
  'ES9',
  'ES10',
  'ES11',
];

let timeStampStart = Date.now();
for (elem of arr) {
  console.log(elem);
}
let timeStampStop = Date.now();

console.log(timeStampStop - timeStampStart);
timeStampStart = Date.now();
arr.forEach((element) => {
  console.log(element);
});

timeStampStop = Date.now();
console.log(timeStampStop - timeStampStart);
