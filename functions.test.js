const { 
    greeting, 
    add, 
    returnTwo,
    multiply,
    subtract,
    divide
} = require('./functions');

test('greeting("zach") should return Hello, zach.', () => {
  expect(greeting('zach')).toBe('Hello, zach.');
});

test('returnTwo() should return 2', () => {
    expect(returnTwo()).toBe(2);
});
describe('Math functions', () => {
   test('add(1, 2) should return 3', () => {
    expect(add(1, 2)).toBe(3);
   }); 
   test('multiply(10, 20) should return 200', () => {
    expect(multiply(10, 20)).toBe(200);
   }); 
   test('subtract(9, 2) should return 7', () => {
    expect(subtract(9, 2)).toBe(7);
   }); 
   test('divide(8, 4) should return 2', () => {
    expect(divide(8, 4)).toBe(2);
   }); 

})
 