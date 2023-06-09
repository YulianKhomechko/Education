import { afterAll, afterEach, beforeAll, beforeEach, describe, expect, it } from 'vitest';

import { User } from './hooks';

const testEmail = 'test@test.com'; // you can add variables on the top level of the code to reduce code repetition.
// but code repetition could be fine when writing test.

describe.concurrent('User class', () => {
    let user;
    // Also, hooks could be added on the top level of the code
    beforeAll(() => {
        console.log('beforeAll');
    });

    beforeEach(() => {
        console.log('beforeEach');
        user = new User(testEmail);
    });

    afterAll(() => {
        console.log('afterAll');
    });

    afterEach(() => {
        console.log('afterEach');
    });

    it('should update the email', () => {
        const newTestEmail = 'test2@test.com';

        user.updateEmail(newTestEmail);

        expect(user.email).toBe(newTestEmail);
    });

    it('should have an email property', () => {
        expect(user).toHaveProperty('email');
    });

    it('should store the provided email value', () => {
        expect(user.email).toBe(testEmail);
    });

    it('should clear the email', () => {
        user.clearEmail();

        expect(user.email).toBe('');
    });

    it('should still have an email property after clearing the email', () => {
        const user = new User(testEmail);
        user.clearEmail();

        expect(user).toHaveProperty('email');
    });
});
