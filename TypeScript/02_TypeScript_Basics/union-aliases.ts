// type alias
type Combinable = number | string; // Union type
type ResultConversion = 'as-number' | 'as-string';

function combined(input1: Combinable, input2: number | string, resultConversion: 'as-number' | 'as-string') {
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number') {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString;
  }

  if (resultConversion === 'as-number') {
    return +result;
  }

  if (resultConversion === 'as-string') {
    return result.toString();
  }

  return result;
}

console.log(combined(30, 35, 'as-number'));
console.log(combined('30', 12, 'as-string'));
