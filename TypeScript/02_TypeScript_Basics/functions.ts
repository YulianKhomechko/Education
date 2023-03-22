// not necessary in this case because type inference works perfectly fine
function add(n1: number, n2: number): number {
  return n1 + n2;
}

// void - use this type when function doesn't return anything
function printResult(num: number): void {
  console.log('Result: ' + num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;

  cb(result);
}

printResult(add(5, 12));

// let combineValues: Function;

let combineValues: (n1: number, n2: number) => number;

combineValues = add;
// combineValues = printResult;

// combineValues = 5;

addAndHandle(10, 20, (result) => console.log(result));
