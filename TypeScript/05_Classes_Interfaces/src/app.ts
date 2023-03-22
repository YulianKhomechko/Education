const crypto = require('crypto');

// Classes are blueprints for the objects. We can create **instances** of classes
abstract class Department {
  static fiscalYear = 2022; // we can add static properties as well
  // classes in JS are syntactic sugar for constructor functions
  // public is set by default
  public name: string; // define types of class fields
  // name: string = 'DEFAULT'; // You can assign a default value;
  // private employees: string[] = [];
  // use protected to grant access to the property inside classes that extend this class
  protected employees: string[] = [];

  protected constructor(name: string) {
    this.name = name;
  }

  // we call static methods directly on the class without instantiating it
  static createEmployee(name: string) {
    return { name };
  }

  describe(this: Department) {
    console.log(`The name of the department is ${this.name}`);
    // console.log(this.fiscalYear); static method, because this is referring to the instance of the class
    console.log(Department.fiscalYear);
  }

  abstract getEmployees(this: Department): void;

  addEmployee(this: Department, employee: string) {
    this.employees.push(employee);
  }

  printEmployeesInfo(this: Department) {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

// Create an instance of a class
// const department = new Department('IT Department'); now can't be instantiated as it's an abstract class

// console.log(department);
// department.describe();

// const departmentCopy = { name: 'Copy', describe: department.describe };
// // departmentCopy.describe(); // will show an error if name is not provided

// department.addEmployee('Yulian');
// department.addEmployee('Max');
// department.printEmployeesInfo();`

// Shorthand initialization
class Person {
  private _age: number;

  constructor(protected readonly id: string, public name: string, age: number) {
    this._age = age;
    console.log(this);
  }
}

const person = new Person(crypto.randomUUID(), 'Yulian', 22);

// Inheritance
class ITDepartment extends Department {
  constructor(public admins: string[] = []) {
    super('IT Department');
    console.log(this);
  }

  getEmployees() {
    return this.employees;
  }

  develop() {
    console.log('Developing software...');
  }
}

const itDepartment = new ITDepartment();
itDepartment.develop();

// singleton
class AccountingDepartment extends Department {
  private static instance: AccountingDepartment;
  private lastReport: string;

  private constructor(private reports: string[] = []) {
    super('Accounting Department');
    // console.log(this);
    this.lastReport = reports[0] || '';
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new AccountingDepartment();
    }

    return this.instance;
  }

  getEmployees() {
    return this.employees;
  }

  get mostRecentReport() {
    return this.lastReport;
  }

  set mostRecentReport(text: string) {
    if (!text) {
      throw new Error('Please provide a valid value.');
    }

    this.lastReport = text;
  }

  // you can overwrite methods of the base class
  addEmployee(name: string) {
    if (name === 'Max') {
      return;
    }

    // this.employees.push(name); private properties are only accessible from inside the class in which they were defined
    this.employees.push(name); // accessible if we are using protected instead of private
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  report() {
    console.log('Something went wrong...');
  }
}

// const accountingDepartment = new AccountingDepartment();

// accountingDepartment.addEmployee('Max');
// accountingDepartment.addEmployee('Yulian');
// accountingDepartment.describe();
// console.log(accountingDepartment.mostRecentReport);
// accountingDepartment.mostRecentReport = 'This is the last report.';

console.log(Department.createEmployee('Yulian'));
console.log(Department.fiscalYear);

const accountingDepartment = AccountingDepartment.getInstance();
const accountingDepartment2 = AccountingDepartment.getInstance();

console.log(accountingDepartment === accountingDepartment2);
