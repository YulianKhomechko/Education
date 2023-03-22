import { validateNumber, validateStringNotEmpty } from './validation';

export function transformToNumber(value) {
    return Number.parseInt(value, 10);
}

export const cleanNumbers = (numberInputs) => {
    let numbers = [];
    for (const numberInput of numberInputs) {
        validateStringNotEmpty(numberInput);
        const number = transformToNumber(numberInput);
        validateNumber(number);
        numbers.push(number);
    }

    return numbers;
};
