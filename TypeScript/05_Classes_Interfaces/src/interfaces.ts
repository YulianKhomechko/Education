// type AddFn = (a: number, b: number) => number;

// it is possible to define function type using interface, but type is more common for function types
interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
  return n1 + n2;
}

interface Named {
  readonly name: string;
  outputName?: string; // optional property
}

interface AnotherInterface {
}

// type Human = {}

// interfaces can only be used to describe the structure of an object.
interface Greetable extends Named, AnotherInterface {
  readonly name: string;

  // greet?(phrase: string): void // optional method
  greet?: (phrase: string) => void; // optional method
}

// you can implement more than one interface: implements Greetable, AnotherInterface, AndAnotherInterface
class Human implements Greetable, Named {
  constructor(public name: string, public age: number) {
  }

  greet(phrase: string) {
    console.log(phrase);
  }
}

let user1: Greetable;

// user1 = {
//   name: 'Yulian',
//   age: 22,
//
//   greet(phrase: string) {
//     console.log(`${phrase}, my name is ${this.name}`);
//   }
// }

user1 = new Human('Yulian', 22);

