function add(n1, n2, printResult, phrase) {
    // console.log(typeof n1);
    // if (typeof n1 !== 'number' || typeof n2 !== 'number') {
    //   throw new Error('Incorrect input');
    // }
    var result = n1 + n2;
    if (printResult) {
        console.log("".concat(phrase && phrase, " ").concat(result));
    }
    return result;
}
var number1 = '5';
var number2 = 7;
var result = add(number1, number2, true, 'Result is');
console.log(result);
