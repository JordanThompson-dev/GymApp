const RemoveData = require('./workout2');
//The testing is throwing errors because we cannot test firebase database
 const firebase= require('./workout2');
test('RemoveData function exists', () => {
  expect(RemoveData).toBeDefined();
});
//Remove function should br defined
test('should be not  null', () => {
  expect(RemoveData).not.toBeNull();

});
// toBeFalsy
test('Should be falsy', () => {
  expect(RemoveData(undefined)).toBeFalsy();
});
//database to set to not defined
test('Should not be defined', () => {
  expect(firebase).not.toBeDefined();
});
