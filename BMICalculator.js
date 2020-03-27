 function bmi () {
var weight,height;
var result = weight / (height * height);
var height = Number(document.getElementById("height").value);
var weight = Number(document.getElementById("weight").value);
document.getElementById("result").innerHTML = "Your bmi score is : " + result;
}
//module.exports = bmi;
