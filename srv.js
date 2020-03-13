const express = reqiure ("express");
const bodyParser= require ("body-parser");
const app =express();
app.use(express.static('client'));
app.get("/", function(req,res){
  res.send("index.html")
});

app.listen(8080, function(){
  console.log("server is running");
});
