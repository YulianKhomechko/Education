import { expect, it } from 'vitest';
import { add } from './math';

it('should summarize all number values in an array', () => {
    // Arrange
    const numbers = [1, 2, 3];
    const expectedResult = numbers.reduce((a, b) => a + b, 0);

    // Act
    const result = add(numbers);

    // Assert
    expect(result).toBe(expectedResult);
});

// AAA - Arrange, Act, Assert.
// Arrange - Define the testing environment and values
// Act - Run the actual code.
// Assert - Evaluate the produced value / result and compare it to the expected value /result

it('should yield NaN if at least one invalid argument is provided', () => {
    const inputs = ['invalid', 2, 3];

    const result = add(inputs);

    expect(result).toBe(NaN);
});

it('should yield correct sum if an array of numeric string values is provided', () => {
    const numbers = ['1', '2', '3'];

    const expectedResult = numbers.reduce((a, b) => Number(a) + Number(b), 0);
    const result = add(numbers);

    expect(result).toBe(expectedResult);
});

it('should yield 0 is an empty array is provided', () => {
    const expectedResult = 0;
    const result = add([]);

    expect(result).toBe(expectedResult);
});

it('should throw an error if no value is passed into the function', () => {
    const resultFn = () => {
        add();
    };

    expect(resultFn).toThrow(Error);
});

it('should throw an error if provided with multiple arguments intead of array', () => {
    const num1 = 1;
    const num2 = 2;

    const resultFn = () => {
        add(num1, num2);
    };

    expect(resultFn).toThrow(Error);
});
