  var firebaseConfig = {
    apiKey: "AIzaSyD7dq4bh88ZTL7-k3z2kj3cXwMlr3XgAC4",
    authDomain: "gymapp-5fbe5.firebaseapp.com",
    databaseURL: "https://gymapp-5fbe5.firebaseio.com",
    projectId: "gymapp-5fbe5",
    storageBucket: "gymapp-5fbe5.appspot.com",
    messagingSenderId: "50631981290",
    appId: "1:50631981290:web:dc3e83f3d883c7e1317f93",
    measurementId: "G-CLFVBS5DM8"
  };

  //Initialise Firebase
  firebase.initializeApp(firebaseConfig);
  var database = firebase.database();

  //=========NEW USER=======

  var firebaseUsersCollection = database.ref().child('users');

  function submitUser() {

    var user = {
      firstName: $('#firstNameField').val(),
      lastName: $('#lastNameField').val(),
      email: $('#emailField').val(),
      password: $('#pinField').val(),
      weight: $('#weightField').val(),
      height: $('#heightField').val(),
      dob: $('#dateOfBirthField').val(),
    };

    firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
    .then(function(user){
      console.log("Successbully created user account with uid:",
        user.uid);
    })
    .catch(function(error){
      console.log("Error creating user:", error)
    });

    firebaseUsersCollection.push(user);

    firebase.auth().onAuthStateChanged(user => {
    if(user) {
      window.location = 'loginPage.html';
      }
    })

  };

  firebaseUsersCollection.on('value',function(users){

    var allUsersHtml = "";

    users.forEach(function(firebaseUserReference){

    var user = firebaseUserReference.val();

    var individualUserHtml = `<div class='item'>
                  <p>First Name: `+user.firstName+`</p>
                  <p>Last Name: `+user.lastName+`</p>
                  <p>E-mail: `+user.email+`</p>
                  <p>weight: `+user.weight+`</p>
                  <p>Height: `+user.Height+`</p>
                  <p>Date Of Birth: `+user.dob+`</p>
                </div>`;

    allUsersHtml = allUsersHtml + individualUserHtml;
  });

    $('#currentUsers').html(allUsersHtml);

  });

  //===========LOGIN USER================

  function loginUser() {

  if( $('#emailField').val() != '' && $('#pinField').val() != ''){

  var data = {
    email    : $('#emailField').val(),
    password : $('#pinField').val(),
  };

  var location = 'home.html';

var auth = null;
firebase
  .auth()
  .signInWithEmailAndPassword(data.email, data.password)
  .then( function(user){
    console.log("Authenticated successfully with payload:", user);
    auth = user;
  })
  .catch(function(error){
    console.log("Login Failed!", error);
  })
  firebase.auth().onAuthStateChanged(user => {
  if(user) {
    window.location = 'home.html';
  }
})
}};

//==========USER PROFILE===========

firebaseUsersCollection.on('value',function(users){

  var userHTML = "";

  users.forEach(function(firebaseUserReference){

    var user = firebaseUserReference.val();

    var thisUserHTML = `<div class='item'>
                  <p>Name: `+users.firstName
  })
})
