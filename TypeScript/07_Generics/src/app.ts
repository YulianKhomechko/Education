// Generics
const names: Array<string> = ['Max', 'Yulian']; // string[]

const promise = new Promise<string>((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise resolved');
  }, 2000);
});

promise.then((data) => {
  data.split(' ');
});

// Creating a generic function
function merge<T, U>(objA: T, objB: U) {
  return Object.assign({}, objA, objB);
}

// in this case typescript infers types so there is no need to specify them directly in <>
// const mergedObj = merge<{name: string}, {age: number}>({ name: 'Yulian' }, { age: 22 });
const mergedObj = merge({ name: 'Yulian' }, { age: 22 });
console.log(mergedObj.age);

// Working with constraints
function merge1<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign({}, objA, objB);
}

interface Lengthy {
  length: number;
}


function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let description = 'Got no value.';
  if (element.length === 0) {
    description = `Got 1 elements`;
  }
  if (element.length > 1) {
    description = `Got ${element.length} elements`;
  }

  return [element, description];
}

console.log(countAndDescribe('Hello'));

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
  return obj[key];
}

// extractAndConvert({}, 'name') // error because name does not exist in {}
extractAndConvert({ name: 'Yulian' }, 'name');

type Primitives = number | string | boolean;

// Generic classes
class DataStorage<T extends Primitives> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    const idx = this.data.indexOf(item);
    if (idx === -1) {
      return;
    }

    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return this.data;
  }
}

const textStorage = new DataStorage<string>();

// textStorage.addItem(10); // will show an error, because we explicitly said <string>

textStorage.addItem('Yulian');
textStorage.addItem('Max');
textStorage.removeItem('Yulian');
textStorage.getItems();

const combinedStorage = new DataStorage<number | string>();

combinedStorage.addItem('w');
combinedStorage.addItem(2);
// combinedStorage.addItem({}); // will show an error, because we explicitly said <number | string>

// Build-in utility types
interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(title: string, description: string, date: Date): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}

const namesArr: Readonly<string[]> = ['Yulian', 'Max'];
// namesArr.push('Manu'); // An error will be shown