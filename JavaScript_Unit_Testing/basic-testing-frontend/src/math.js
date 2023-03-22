import { cleanNumbers, transformToNumber } from './util/numbers';
import { validateNumber, validateStringNotEmpty } from './util/validation';

export function add(numbers) {
    if (!numbers) {
        throw new Error('Provide an array of numbers.');
    }

    let sum = 0;

    for (const number of numbers) {
        sum += Number(number);
    }
    return sum;
}

export const calculateResult = (numberInputs) => {
    let result = '';
    try {
        const numbers = cleanNumbers(numberInputs);
        result = add(numbers).toString();
    } catch (error) {
        result = error.message;
    }

    return result;
};
