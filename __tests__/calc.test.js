import { calc } from '../src/calc.js';

describe('calc', () => {
    test('add works with positive numbers', () => {
        expect(calc.add(2, 3)).toBe(5);
    });
    
    test('add works with negative numbers', () => {
        expect(calc.add(-2, -3)).toBe(-5);
    });
    
    test('sub works', () => {
        expect(calc.sub(5, 2)).toBe(3);
    });
    
    test('sub works with negative result', () => {
        expect(calc.sub(2, 5)).toBe(-3);
    });
    
    test('mul works', () => {
        expect(calc.mul(2, 3)).toBe(6);
    });
    
    test('mul works with zero', () => {
        expect(calc.mul(2, 0)).toBe(0);
    });
    
    test('div works', () => {
        expect(calc.div(6, 2)).toBe(3);
    });
    
    test('div works with decimal result', () => {
        expect(calc.div(5, 2)).toBe(2.5);
    });
    
    test('div by zero throws', () => {
        expect(() => calc.div(1, 0)).toThrow(RangeError);
    });
    
    test('div by zero error message', () => {
        expect(() => calc.div(1, 0)).toThrow('Division by zero');
    });
});
