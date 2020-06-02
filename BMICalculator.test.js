const bmi = require('./BMICalculator');
test('bmi function exists', () => {
  expect(bmi).toBeDefined();
});
test('should be not  null', () => {
  expect(bmi).not.toBeNull();
});
test('check Bmi of 67 and 2  to equal 16.75 ', () => {
  expect(bmi(67,2)).toBe(16.75);
});
