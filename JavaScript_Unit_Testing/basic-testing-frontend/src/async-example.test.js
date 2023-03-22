import { it, expect } from 'vitest';
import { generateToken, generateTokenPromise } from './async-example';

// Callback
// it('should generate a token value', (done) => {
//     const testUserEmail = 'test@test.com';
//
//     generateToken(testUserEmail, (err, token) => {
//         // try {
//         //     expect(token).not.toBe(2);
//         //     done();
//         // } catch (error) {
//         //     done(error);
//         // }
//
//         expect(token).toBeDefined();
//
//         done();
//     });
// });

// Promise
it('should generate a token value', () => {
    const testUserEmail = 'test@test.com';

    // expect supports promises out of the box
    // expect(generateTokenPromise(testUserEmail)).rejects.toBe();

    // you should return the promise assertion in your tests to guarantee that Jest wait for the promise to be resolved.
    return expect(generateTokenPromise(testUserEmail)).resolves.toBeDefined();
});

// Alternative approach
it('should generate a token value', async () => {
    const testUserEmail = 'test@test.com';

    const token = await generateTokenPromise(testUserEmail);

    expect(token).toBeDefined();
});
