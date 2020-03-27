

const test = require('firebase-functions-test')({
	databaseURL: "https://gymapp-cb244.firebaseio.com",
	storageBucket: "gymapp-cb244.appspot.com",
	projectId: "gymapp-cb244",
}, 'C:/Users/Danny/Desktop/UP - CS/Year 2/SeTAP/GymApp/gymapp-cb244-215aabd2f43a.json');

const submitUser = require('./app');
test('submitUser function exists', () => {
	expect(submitUser).toBeDefined();
});
test('should be not null', () => {
	expect(submitUser).not.toBeNull();
});

const loginUser = require('./app');
test('loginUser function exists', () => {
	expect(loginUser).toBeDefined();
});
test('should be not null', () => {
	expect(loginUser).not.toBeNull();
});