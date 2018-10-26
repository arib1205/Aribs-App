var express = require('express');
var app = express();

var port = process.env.PORT || 8080;
app.use(express.static(__dirname));

app.get("/", function(req, res){
  res.send("Khaana kidhar khaa rha hai?");
  console.log("APP RUNNING");
})

app.listen(port, function(){
  console.log("app running");
})
