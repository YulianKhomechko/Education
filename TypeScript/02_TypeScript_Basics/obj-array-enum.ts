// const person: {
//   name: string;
//   age: number;
// } = {
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: 'Yulian',
//   age: 22,
//   hobbies: ['sports', 'cooking', 'traveling'],
//   role: [2, 'author'],
// };

const ADMIN = 0;
const READ_ONLY = 1;
const AUTHOR = 2;

enum Roles {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

// enum Roles {
//   ADMIN = 'ADMIN',
//   READ_ONLY = 100,
//   AUTHOR, // = 101
// }

const person = {
  name: 'Yulian',
  age: 22,
  hobbies: ['sports', 'cooking', 'traveling'],
  role: Roles.ADMIN,
};

let favoriteActivities: string[];
favoriteActivities = ['Sport'];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby);
}
