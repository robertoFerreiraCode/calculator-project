import { describe } from "yargs";
import {plus, minus, multiply, divide} from "./calculations";

test('plus function should add correctly and convert to string', () => {
    expect(plus([1, 2])).toBe("3");
});

test('mminus function should subtract correctly and convert to string', () => {
    expect(minus([5, 1])).toBe("4");
});

test('multiply function should multiply correctly and convert to string', () => {
    expect(multiply([10, 4])).toBe("40");
});

test('divide function should divide correctly and convert to string', () => {
    expect(divide([20, 4])).toBe("5");
});

test('divide function should handle negatives and convert to string', () => {
    expect(divide([-20, 4])).toBe("-5");
});