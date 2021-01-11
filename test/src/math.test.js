import { add } from './math';

test("1 + 1 should return 2", () => {
  expect(add(1,1)).toBe(2);
});

test('-1 + -1 should return -2', () => {
  expect(add(-1, -1)).toBe(-2);
});

test.todo("Write a todo test, with one positive and one negative number");