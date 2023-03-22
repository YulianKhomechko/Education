// *** Advanced Typing Concepts ***

// Intersection types - they allow us to combine other types
type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const employee1: ElevatedEmployee = {
  name: 'Yulian',
  privileges: ['create'],
  startDate: new Date(),
};

// This is also can be implemented using interfaces
interface IAdmin {
  name: string;
  privileges: string[];
}

interface IEmployee {
  name: string;
  startDate: Date;
}

interface IElevatedEmployee extends Admin, Employee {}

const employee2: IElevatedEmployee = {
  name: 'Yulian',
  privileges: ['create server'],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric; // number - because it's the only intersection

// Type Guards - type narrowing
function add(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }

  return a + b;
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(employee: UnknownEmployee) {
  console.log(`Name: ${employee.name}`);

  if ('privileges' in employee) {
    console.log(`Privileges: ${employee.privileges}`);
  }

  if ('startDate' in employee) {
    console.log(`Start Date: ${employee.startDate}`);
  }
}

class Car {
  drive() {
    console.log(`Driving...`);
  }
}

class Truck {
  drive() {
    console.log(`Driving...`);
  }

  loadCargo() {
    console.log(`Loading cargo...`);
  }
}
type Vehicle = Car | Truck;

const vehicleCar = new Car();
const vehicleTruck = new Truck();

// function useVehicle(vehicle: Vehicle) {
//   vehicle.drive();
//
//   if ('loadCargo' in vehicle) {
//     vehicle.loadCargo();
//   }
// }

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();

  if (vehicle instanceof Truck) {
    vehicle.loadCargo();
  }
}

// Discriminated Union
interface Bird {
  type: 'bird'; // not a value but a literal type. So the property type should be equal to sting 'bird'
  flyingSpeed: number;
}

interface Horse {
  type: 'horse';
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  // if ('flyingSpeed' in animal) {
  //   console.log(`The flying speed is ${animal.flyingSpeed}`);
  // }
  let speed: number;
  switch (animal.type) {
    case 'bird':
      speed = animal.flyingSpeed;
      break;
    case 'horse':
      speed = animal.runningSpeed;
      break;
  }

  console.log(`Moving with speed ${animal}`);
}

moveAnimal({ type: 'bird', flyingSpeed: 10 });

const rootElement = document.getElementById('root');
const userInputElement = document.getElementById('user-input') as HTMLInputElement; // typecasting
const userInputElement1 = <HTMLInputElement>document.getElementById('user-input'); // typecasting
const userInputElement2 = document.getElementById('user-input');
userInputElement.value = 'Hi there!'; // no errors
userInputElement1.value = 'Hello'; // no errors
if (userInputElement2 instanceof HTMLInputElement) {
  userInputElement2.value = 'Hello there';
}

// Index Properties
interface ErrorContainer {
  [key: string]: string;
}

const errorBag: ErrorContainer = {
  email: 'Not a valid email!',
  // number: 234
};

// Function overloads
function sum(a: number, b: number): number;
function sum(a: string, b: string): string;
function sum(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }

  return a + b;
}

const result = sum(1, 5);
const result1 = sum('Hello', 'Yulian');

// Optional chaining
const fetchedUserData = {
  id: 'u1',
  name: 'Yulian',
  job: { title: 'CEO', description: 'My own company' },
};

// console.log(fetchedUserData.job && fetchedUserData.job.title);
// Optional chaining
console.log(fetchedUserData?.job?.title);
// ?? - Nullish Coalescing
