//jshint esversion :6
const express = reqiure ("express");
const bodyParser= require("body-parser");
const app =express();
app.get("/", function(req,res){
  res.send("well done")
});

app.listen(8080, function(){
  console.log("server is running");
});
