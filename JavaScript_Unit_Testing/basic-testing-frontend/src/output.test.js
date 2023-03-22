import { describe, it, expect } from 'vitest';
import { generateResultText } from './output';

/**
 * @jest-environment jsdom
 */

describe('generateResultText', () => {
    it('should return a string, no matter which value is passed in', () => {
        const valueNum = 1;
        const valueStr = 'str';
        const valueBool = false;

        const resultNum = generateResultText(valueNum);
        const resultStr = generateResultText(valueStr);
        const resultBool = generateResultText(valueBool);

        const expectedResultNum = typeof resultNum === 'string';
        const expectedResultStr = typeof resultStr === 'string';
        const expectedResultBool = typeof resultBool === 'string';

        expect(expectedResultNum).toBeTruthy();
        expect(expectedResultStr).toBeTruthy();
        expect(expectedResultBool).toBeTruthy();
    });

    it('should return a string "Invalid input. You must enter valid numbers." if "invalid" was passed as an argument', () => {
        const input = 'invalid';

        const expectedResult = 'Invalid input. You must enter valid numbers.';
        const result = generateResultText(input);

        expect(result).toBe(expectedResult);
    });

    it('should return a string of the following format "Result: ${calculationResult}" if number was provided as an argument', () => {
        const result = 5;

        const resultText = generateResultText(result);

        expect(resultText).toContain(result.toString());
    });
});
