function add(n1: number, n2: number, printResult: boolean, phrase: string) {
  // console.log(typeof n1);
  // if (typeof n1 !== 'number' || typeof n2 !== 'number') {
  //   throw new Error('Incorrect input');
  // }
  const result = n1 + n2;

  if (printResult) {
    console.log(`${phrase && phrase} ${result}`);
  }

  return result;
}

const number1 = 5;
const number2 = 7;

const result = add(number1, number2, true, 'Result is');
console.log(result);
