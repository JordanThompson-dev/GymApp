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

  $('#loginForm').on('btnLogin', function(e) {
    e.preventDefault();

  var data = {
    email    : $('#emailField').val(),
    pin : $('#pinField').val(),
  };

  var auth = null;
  firebase
    .auth()
    .signInWithEmailAndPassword(data.email, data.pin)
    .then(function(users){
     auth = authData;
      console.log("Authenticated successfully with payload:", users)
     auth = users;
    })
    .catch(function(error){
      console.log("Login Failed!", + error);
    
    });