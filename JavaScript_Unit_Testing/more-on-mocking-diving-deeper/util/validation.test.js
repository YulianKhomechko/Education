import { describe, it, expect } from 'vitest';
import { ValidationError } from './errors';
import { validateNotEmpty } from './validation';

describe('validateNotEmpty', () => {
    it('should throw an error if an empty string is provided as an argument', () => {
        const testInput = '   ';

        const validationFn = () => validateNotEmpty(testInput);

        expect(validationFn).toThrow(ValidationError);
    });

    it('should throw an error with a provided error message', () => {
        const testInput = '';
        const testErrorMessage = 'TestErrorMessage';

        const validationFn = () => validateNotEmpty(testInput, testErrorMessage);

        expect(validationFn).toThrow(testErrorMessage);
    });
});
