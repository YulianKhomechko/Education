// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitives

let age: number = 22;  // it's important to write number in lowercase. If you write Number you point to the Number object not a number primitive type.

let userName: string = 'yulianKh';

let isInstructor: boolean;

isInstructor = false;

// More complex types

let hobbies: string[]; // array of strings
let ages: number[]; // array of numbers

hobbies = ['Sports', 'Programming', 'Cooking']

// Type Aliases
type Person = {
    name: string,
    age: number
}


let person: Person; // by default, you can store any type in a variable if other is not specified.
// Object type definition.

person = {
    name: 'Yulian',
    age: 22
}

// person = {
//     isEmployee: true
// }

let people: Person[];

//
// Type Inference - typescript automatically defines type when you assign a value;
//

let course: string | number = 'React the Complete Guide'
// course = 12; -- cause an error

// type inference is a good feature, you should embrace it.

//
// Union Types - type definition that allows more than one type
//

let smt: string | number | boolean = 'smt';

//
// Understanding Type Aliases
//

//
// Functions and Types
//
function add1(a: number, b: number): number {
    return a + b;
} // in this case typescript automatically defines type of return value, so it's redundant to explicitly define type

function printOutput(value: any): void {
    console.log(value)
}

//
// Generics
//

function insertAtBeginning<T>(array: T[], val: T) {
    const newArray = [val, ...array];
    return newArray;
}

const demoArray: Array<number> = [1, 22, 3, 4, 5]; // another way to define array of numbers

const updatedArray = insertAtBeginning(demoArray, -1);

const stringArray = insertAtBeginning<string>(['khomechko'], 'yulian')
// We can not just use the angle brackets to define a generic type but also to USE a generic type and explicitly set the placeholder type that should be used
// - sometimes this is required if TypeScript is not able to inder the (correct) type. We'll see this later in this course section.

