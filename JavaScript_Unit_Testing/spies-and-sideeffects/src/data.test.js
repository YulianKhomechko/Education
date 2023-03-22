import { describe, it, expect, vi } from 'vitest';
import { generateReportData } from './data.js';

describe('generateReportData', () => {
    it('should execute logFn if provided', () => {
        const logger = vi.fn(() => {}); // creates an empty function which keeps track any function executions
        // you can actually pass a function in .fn() method
        logger.mockImplementationOnce(() => {});

        generateReportData(logger);
        // expect(logger).toBeCalled();
        // expect(logger).toBeCalledWith('arg1', 'arg2');

        expect(logger).toBeCalledTimes(1);
    });
});
