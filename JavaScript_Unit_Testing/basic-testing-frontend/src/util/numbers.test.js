import { describe, it, expect } from 'vitest';
import { cleanNumbers, transformToNumber } from './numbers';

describe('transformToNumber', () => {
    it('should return a number when a string is provided', () => {
        const numString = '1';

        const expectedResult = 1;
        const result = transformToNumber(numString);

        expect(result).toBe(expectedResult);
    });

    it('should return NaN, when invalid value is provided', () => {
        const input = '';

        const expectedResult = NaN;
        const result = transformToNumber(input);

        expect(result).toBe(expectedResult);
    });
});

describe('cleanNumbers', () => {
    it('should return an array of number values if an array of sring number values is provided', () => {
        const numberValues = ['1', '2', '3'];

        const expectedResult = [1, 2, 3];
        const result = cleanNumbers(numberValues);

        expect(result).toEqual(expectedResult);
    });

    it('should throw an error if an invalid value is provided', () => {
        const input = ['', 1];

        const resultFn = () => {
            cleanNumbers(input);
        };

        expect(resultFn).toThrow(Error);
    });
});
