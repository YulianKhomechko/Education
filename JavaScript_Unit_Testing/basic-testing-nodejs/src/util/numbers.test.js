import { it, expect } from 'vitest';
import { transformToNumber } from './numbers';

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
