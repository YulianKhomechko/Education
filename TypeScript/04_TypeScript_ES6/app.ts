const userName = 'Yulian';
// userName = 'anonymous';

let age = 30;
age = 20;

// const and let is block scoped

function add(a: number, b: number) {
  var result;
  result = a + b;
  return result;
}

// console.log(result); available only inside of a function where it was declared

if (age > 20) {
  var isOld = true; // will be available outside of the block scope, because var is only function scoped. Variables, declared with let or const won't be visible outside of the scope, because they are block scoped.
  const blockScopeVariable = 'Declared inside of a block';
}

console.log(isOld);
// console.log(blockScopeVariable); // cannot find

///////////////////////////////
// Arrow Functions

const addArrow = (a: number, b: number) => a + b;

addArrow(3, 9);

// const printOutput = (output: string | number) => {
//   console.log(output)
// }

const printOutput = (output: string | number) => console.log(output);

// const button = document.querySelector('button');
//
// if (button) {
//   button.addEventListener('click', (event) => {
//     console.log(event);
//   });
// }

////////////////////////////////////////////
// Default function parameters

const sum = (a: number = 5, b: number = 10) => {
  return a + b;
};

sum(undefined, 15);

const hobbies = ['sports', 'cooking'];
const activeHobbies = ['hiking'];

// activeHobbies.push(hobbies)
activeHobbies.push(...hobbies); // use spread operator whenever you need a list of comma separated values.

const person = {
  name: {
    firstName: 'Yulian',
    lastName: 'Khomechko',
  },
  age: 22,
};

const notCopiedPerson = person; // not a real copy

const copiedPerson = { ...person };

/////////////////////////////////////////
// Rest parameters

const sumElements = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => curResult + curValue, 0);
};

sumElements(1, 2, 3, 4, 5, 6, 7, 11, 13);

///////////////////////////////////////////////
// Arrays and Objects destructuring

const hobby1 = hobbies[0];
const hobby2 = hobbies[1];

const [firstEl, , thirdEl, ...restElArray] = hobbies; // pull elements out of array and store in a variable

const { name: { firstName: personFirstName, lastName: personLastName }, age: personAge } = person;
console.log(personFirstName, ' ', personLastName);
console.log(personAge);