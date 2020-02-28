// BMI function get height and weight from user input and calculate BMI.
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
