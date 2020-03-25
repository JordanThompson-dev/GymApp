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