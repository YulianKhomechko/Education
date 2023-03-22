import { describe, it, expect, beforeEach } from 'vitest';
import { extractPostData } from './posts';

describe('extractPostData', () => {
    let testFormData;
    beforeEach(() => {
        testFormData = {
            title: testTitle,
            content: testContent,
            get(identifier) {
                return this[identifier];
            }
        };
    });

    it('should extract title and content front the provided form', () => {
        const testTitle = 'title';
        const testContent = 'test';

        const data = extractPostData(testFormData);

        expect(data.title).toBe(testTitle);
        expect(data.content).toBe(testContent);
    });
});
