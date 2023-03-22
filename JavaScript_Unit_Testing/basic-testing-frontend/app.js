import { calculateResult } from './src/math';
import { generateResultText, outputResult } from './src/output';
import { extractEnteredNumbersValue } from './src/parser.js';

const form = document.querySelector('form');

function formSubmitHandler(event) {
    event.preventDefault();
    const numberValues = extractEnteredNumbersValue(form);

    let result = calculateResult(numberValues);
    const resultText = generateResultText(result);

    outputResult(resultText);
}

form.addEventListener('submit', formSubmitHandler);
