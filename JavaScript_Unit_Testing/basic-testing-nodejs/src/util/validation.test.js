import { it, expect, describe } from 'vitest';
import { validateStringNotEmpty, validateNumber } from './validation';

describe('validateStringNotEmpty', () => {
    it('should throw an error if provided string is empty', () => {
        const input = '';

        const resultFn = () => {
            validateStringNotEmpty(input);
        };

        expect(resultFn).toThrow(Error);
    });
});

describe('validateNumber', () => {
    it("shold throw an error if provided value is not a valid number or can't be transformed to a number", () => {
        const input = 'invalid';

        const resultFn = () => {
            validateNumber(input);
        };

        expect(resultFn).toThrow(Error);
    });
});
