export function add(a, b) {
  return a + b;
};

export function fakeGetUser(user) {
  return {
    name: "Test",
    age: "25"
  };
};

export function asyncAdd(a, b, cb) {
  setTimeout(() => {
    cb(a + b);
  }, 1000)
};

export function promiseAdd(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
    });
  });
};