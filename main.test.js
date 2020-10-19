//👉 Write your tests below here:
const { addObjects } = require("./main");

it("should add two objects and give us back {a: 2, b: 2}", () => {
  const actual = addObjects({ a: 1, b: 1 }, { a: 1, b: 1 });
  expect(actual).toEqual({ a: 2, b: 2 });
});

it("if we pass in one object, it should give us back {a: 1}", () => {
  const actual = addObjects({ a: 1, b: 1 });
  expect(actual).toEqual({ a: 1, b: 1 });
});

it("if we pass in three objects, it should give us {a: 2, c: 3, d: 4, e: 5}", () => {
  const actual = addObjects({ a: 1, c: 1 }, { c: 2, a: 0 }, { d: 4, e: 5 });
  expect(actual).toEqual({ a: 1, c: 3, d: 4, e: 5 });
});

it("should add two objects, handle negative numbers correctly and give us back { a: 1, z: -15, s: 3 }", () => {
  const actual = addObjects({ a: 1, z: -5 }, { z: -10, s: 3 });
  expect(actual).toEqual({ a: 1, z: -15, s: 3 });
});
