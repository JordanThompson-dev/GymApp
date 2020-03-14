const express = require("express");
const bodyParser= require("body-parser");
const app =express();

app.use(bodyParser.urlencoded());
app.use(express.static('public'));
app.get("/", function(req,res){
  res.sendFile(__dirname+'/index.html')
});

app.listen(8080, function(){
  console.log("server is running");
});
