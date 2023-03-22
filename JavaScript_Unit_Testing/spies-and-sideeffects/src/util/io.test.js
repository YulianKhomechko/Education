import { promises as fs } from 'fs';
import { expect, it, vi } from 'vitest';
import writeData from './io.js';

// in jest use jest (instead of vi)

vi.mock('fs'); // name of a module or path to the module. It will replace all function of this module with empty spy functions.
vi.mock('path', () => ({
    default: {
        join: (...args) => args.at(-1)
    }
}));

it('should return a promise that resolves to no value if called correctly', () => {
    const testData = 'test';
    const testFileName = 'test.txt';

    writeData(testData, testFileName);

    // return expect(writeData(testData, testFileName)).resolves.toBeUndefined();
    // expect(fs.writeFile).toBeCalled();
    expect(fs.writeFile).toBeCalledWith(testFileName, testData);
});
