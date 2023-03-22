// Decorators Meta-Programming
// Helps to write code that is easier to understand to other developers

// set experimentalDecorators to true in tsconfig.json

// function Logger(constructor: Function) {
//   console.log(`Logging...`)
//   console.log(constructor);
// }
// Decorators execute when class is defined not when it's instantiated

function Logger(loggingText: string) {
  return function(constructor: Function) {
    console.log(loggingText);
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  return function <T extends { new(...args: any[]): { name: string } }>(originalConstructor: T) {
    // console.log('Rendering template');
    // const hookEl = document.getElementById(hookId);
    // const person = new originalConstructor();
    // if (hookEl) {
    //   hookEl.innerHTML = template;
    //   hookEl.querySelector('h1')!.textContent = person.name;
    // }

    // you can return a new constructor function which will replace constructor function of the class
    // class is a synthetic sugar for a constructor function
    return class extends originalConstructor {
      constructor(..._: any[]) {
        super();
        // now this code will be executed when instantiating the class, not when the decorator was defined
        console.log('Rendering template');
        const hookEl = document.getElementById(hookId);
        // const person = new originalConstructor();
        if (hookEl) {
          hookEl.innerHTML = template;
          hookEl.querySelector('h1')!.textContent = this.name;
        }
      }
    };
  };
}

// @Logger('LOGGING - PERSON')
@Logger('LOGGING-PERSON')
@WithTemplate('<h1>My Person Object</h1>', 'app')
// Decorators execute bottom to up
class Person {
  name = 'Yulian';

  constructor() {
    console.log(`Creating person object...`);
  }
}

const person = new Person();

function Log(target: any, propertyName: string | Symbol) {
  console.log('Property Decorator');
  console.log(target, propertyName);
}

function LogAccessor(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log('Accessor Decorator');
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

// if instance target will be prototype if static it will be constructor function
function LogMethod(target: any, name: string | Symbol, descriptor: PropertyDescriptor) {
  console.log('Method Decorator');
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function LogParameter(target: any, name: string | Symbol, number: number) {
  // number of the argument is the third parameter
  console.log('Parameter Decorator');
  console.log(target);
  console.log(name);
  console.log(number);
}

class Product {
  // we can add decorators to properties
  @Log
  title: string;
  private _price: number;


  constructor(title: string, price: number) {
    this.title = title;
    this._price = price;
  }

  @LogAccessor
  set price(value: number) {
    if (value > 0) {
      this._price = value;
    }
  }

  @LogMethod
  getPriceWithTax(@LogParameter tax: number) {
    return this._price;
  }
}

// When do decorators execute
// 1. They execute without instantiating. They execute when the class is defined
// 2. They allow you to do some additional work when the class is defined