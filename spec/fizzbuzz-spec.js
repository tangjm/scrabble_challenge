fizzbuzz = require("../src/fizzbuzz")

describe("Multiples of 3", function() {
  [3, 6, 9, 12, 18, 21, 24, 27].forEach(num => {
    it(`returns 'Fizz' for ${num}`, function() {
      expect(fizzbuzz(num)).toEqual("Fizz")
    })
  })
});

describe("Multiples of 5", function() {
  [5, 10, 20, 25, 35, 40, 50].forEach(num => {
    it(`returns 'Buzz' for ${num}`, function() {
      expect(fizzbuzz(num)).toEqual("Buzz")
    })
  })
});

describe("Multiples of 15", function() {
  [15, 30, 45].forEach(num => {
    it(`returns 'FizzBuzz' for ${num}`, function() {
      expect(fizzbuzz(num)).toEqual("FizzBuzz")
    })
  })
});

describe("Not a multiple", function() {
  [
    1, 2, 4, 7, 8, 11, 13, 14, 16,
    17, 19, 22, 23, 26, 29, 31, 32,
    34, 37, 38, 41, 43, 44, 47, 49
  ].forEach(num => {
    it(`returns ${num}`, function() {
      expect(fizzbuzz(num)).toEqual(num)
    })
  })
});
