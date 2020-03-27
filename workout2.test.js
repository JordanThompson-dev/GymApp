const RemoveData = require('./workout2');
 const firebase= require('./workout2');
test('RemoveData function exists', () => {
  expect(RemoveData).toBeDefined();
});
test('should be not  null', () => {
  expect(RemoveData).not.toBeNull();
});
test('should be not  null', () => {
  expect(RemoveData).not.toBeNull();
});
// toBeFalsy
test('Should be falsy', () => {
  expect(RemoveData(undefined)).toBeFalsy();
});
test('Should not be defined', () => {
  expect(firebase).not.toBeDefined();
});
