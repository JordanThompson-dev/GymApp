// BMI function get height and weight from user input and calculate BMI.
<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/7.10.0/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/7.10.0/firebase-analytics.js"></script>

<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBTYONg80kEBXm9TuvNW6UCATC4YCmkbsE",
    authDomain: "addworkout-27c18.firebaseapp.com",
    databaseURL: "https://addworkout-27c18.firebaseio.com",
    projectId: "addworkout-27c18",
    storageBucket: "addworkout-27c18.appspot.com",
    messagingSenderId: "602359441095",
    appId: "1:602359441095:web:2235671ab0ad01ca4dc0e2",
    measurementId: "G-MBG6D4B9DC"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  function writeData(){
    firebase.database().ref("user").set({
      height: document.getElementById("cm").value,
      weight:  document.getElementById("kg").value
</script>

function BMI(){
  let h=document.getElementById("h").value;
  let w=document.getElementById("w").value;
  let bmi =w/(h/100*h/100);
  let bmio = (bmi.toFixed(2));

document.getElementById("btn").addEventListener("click", function(){
    //console.log("clicked");
    document.getElementById("result").innerHTML = ("Your BMI is " + bmio);
  });
  //{
//  document.getElementById("result").innerHTML ="Your BMI is " + bmio;
//});

//function myfunction(){

//

}
