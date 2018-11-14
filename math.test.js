const add = require('./math').add;
const subtract = require('./math').subtract;
const divide = require('./math').divide;
const multiply = require('./math').multiply;

describe('add', () => {
  it('should add our numbers', () => {
    expect(add(2,3)).toBe(5);
  });
});

describe('subtract', () => {
  it('should subtract our numbers', () => {
    expect(subtract(2,1)).toBe(1);
  });
});

describe('divide', () => {
  it('should divide our numbers', () => {
    expect(divide(10,2)).toBe(5);
  });
});

describe('multiply', () => {
  it('should multiply our numbers', () => {
    expect(multiply(5,5)).toBe(25);
  });
});
