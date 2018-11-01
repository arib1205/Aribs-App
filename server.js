var express = require('express');
var app = express();
const request = require('request');

var port = process.env.PORT || 8080;
app.use(express.static(__dirname));

app.get("/", function(req, res){

  var test_json = {"menu": {
  "id": "file",
  "value": "File",
  "popup": {
    "menuitem": [
      {"value": "New", "onclick": "CreateNewDoc()"},
      {"value": "Open", "onclick": "OpenDoc()"},
      {"value": "Close", "onclick": "CloseDoc()"}
    ]
  }
}}

  res.send(test_json);
  console.log("APP RUNNING");
})

app.get("/api/search", function(req, res){

  var api_key = "1e5917ecde2177374331c2ad9f6c2485";
  params = req.query.q;
  params = encodeURIComponent(params);
  var url = "https://www.food2fork.com/api/search?key=" + api_key + "&q=" + params + "&page=1";
  // console.log(url);
  request(url, {json: true}, (err, response, body) => {
    if(err){return console.log("error")}
    // console.log(req.query);
    // console.log(params);
    res.send(body);
  });
  //res.send("url");
  // console.log("APP RUNNING");
})

app.listen(port, function(){
  console.log("app running");
})
