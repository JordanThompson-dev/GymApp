const w3RemoveClass = require('./Filter');
test('w3RemoveClass function exists', () => {
  expect(w3RemoveClass).toBeDefined();
});
test('should be not  null', () => {
  expect(w3RemoveClass).not.toBeNull();
});
const filterSelection = require('./Filter');
test('filterSelection function exists', () => {
  expect(filterSelection).toBeDefined();
});
test('should not be  null', () => {
  expect(filterSelection).not.toBeNull();
});
test('should not be  null', () => {
  expect(filterSelection).toBeDefined();
});

const w3AddClass = require('./Filter');
test('w3AddClass function exists', () => {
  expect(w3AddClass).toBeDefined();
});

test('should not be  null', () => {
  expect(w3AddClass).not.toBeNull();
});


test('array of string with length of 3', () => {
  const element = "li";
  const name = "fre";
  const w3AddedClass = w3AddClass(element, name);

  expect(w3AddedClass).toEqual([fre]);
});
