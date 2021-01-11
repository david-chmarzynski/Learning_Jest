import { add, fakeGetUser, asyncAdd } from './math';

test("1 + 1 should return 2", () => {
  expect(add(1,1)).toBe(2);
});

test('-1 + -1 should return -2', () => {
  expect(add(-1, -1)).toBe(-2);
});

test.todo("Write a todo test, with one positive and one negative number");

test("fakeGetUser should return name Test and age 25 from object", () => {
  const user = {
    name: "Test",
    age: "25"
  };
  expect(fakeGetUser(user)).toEqual({
    name: "Test",
    age: "25"
  });
});


test("Async function", (done) => {
  const cb = (res) => {
    expect(res).toBe(3);
    done();
  };
  asyncAdd(1, 2, cb);
});