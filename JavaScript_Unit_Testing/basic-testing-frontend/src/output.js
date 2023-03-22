const output = document.getElementById('result');

export const generateResultText = (calculationResult) => {
    let resultText = '';

    if (calculationResult === 'invalid') {
        resultText = 'Invalid input. You must enter valid numbers.';
    } else if (calculationResult !== 'no-calc') {
        resultText = 'Result: ' + calculationResult;
    }

    return resultText;
};

export const outputResult = (resultText) => {
    output.textContent = generateResultText(resultText);
};
