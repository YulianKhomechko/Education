import { describe, it, expect } from 'vitest';
import { HttpError, ValidationError } from './errors';

describe('Class HttpError', () => {
    it('should contain provided status code, message and data', () => {
        const testStatusCode = 200;
        const testMessage = 'test message';
        const testData = { key: 'key' };

        const testError = new HttpError(testStatusCode, testMessage, testData);

        expect(testError.statusCode).toBe(testStatusCode);
        expect(testError.message).toBe(testMessage);
        expect(testError.data).toBe(testData);
    });

    it('should contain undefined as data if not data is provided', () => {
        const testStatusCode = 200;
        const testMessage = 'test message';

        const testError = new HttpError(testStatusCode, testMessage);

        expect(testError.data).toBeUndefined();
    });
});

describe('Class ValidationError', () => {
    it('should contain the provided message', () => {
        const testMessage = 'test';

        const testError = new ValidationError(testMessage);

        expect(testError.message).toBe(testMessage);
    });
});
