
//The connection location of the Firebase for javascript can find the Database
  var firebaseConfig = {
    apiKey: "AIzaSyBEJuxPQk7kgHg6KWNk4OqmiO2ji5XCSaM",
    authDomain: "gymapp-cb244.firebaseapp.com",
    databaseURL: "https://gymapp-cb244.firebaseio.com",
    projectId: "gymapp-cb244",
    storageBucket: "gymapp-cb244.appspot.com",
    messagingSenderId: "33396281966",
    appId: "1:33396281966:web:7e477a69afc5c3626d4c7f",
    measurementId: "G-7WHJHCN3T0"
  };

  //Initialise Firebase
  firebase.initializeApp(firebaseConfig);
  var database = firebase.database();

  //=========NEW USER=======

  //creating an object to push into the firebase database
  var firebaseUsersCollection = database.ref().child('users');

  //creating the submitUser function (see newUser.html where it is initiated)
  function submitUser() {

    //giving variable names to the user inputs in the newUser form
    var user = {
      firstName: $('#firstNameField').val(),
      lastName: $('#lastNameField').val(),
      email: $('#emailField').val(),
      password: $('#pinField').val(),
      weight: $('#weightField').val(),
      height: $('#heightField').val(),
      dob: $('#dateOfBirthField').val(),
    };

    //ensureing that the email & password are remembered for loginPage
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
    .then(function(user){
      console.log("Successbully created user account with uid:",
        user.uid);
    })
    .catch(function(error){
      console.log("Error creating user:", error)
    });

    firebaseUsersCollection.push(user);

    //taking the user to the login page upon successful creation of a user account
    firebase.auth().onAuthStateChanged(user => {
    if(user) {
      window.location = 'loginPage.html';
      }
    })

  };

  //===========LOGIN USER================

  //creating the loginUser function (see loginPage.html where it is initiated)
  function loginUser() {

  //checks that email and pin are inputted by the user
  if( $('#emailField').val() != '' && $('#pinField').val() != ''){

  //creates an object with email and pin user informatin
  var data = {
    email    : $('#emailField').val(),
    password : $('#pinField').val(),
  };

//uses firebase command .signInWithEmailAndPassword to check the user
//files to find and login the user with corresponding email and password
var auth = null;
firebase
  .auth()
  .signInWithEmailAndPassword(data.email, data.password)
  .then( function(user){
    console.log("Authenticated successfully with payload:", user);
    auth = user;
    firebase.auth().onAuthStateChanged(user => {
    if(user) {
    window.location = 'home2.html';
  }
})
  })
  .catch(function(error){
    console.log("Login Failed!", error);
  })
}};
