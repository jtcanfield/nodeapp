const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.use('/nodeapp', express.static(__dirname + '/nodeapp'));

// app.get('/', function(req, res){
//   res.send('hello world');
// });

app.get("/", function(req, res){
  res.sendFile(path.join(__dirname + '/index.html'));
  // app.use('/index.html', express.static('public'))
})


app.listen(port, function(){
  console.log("Server active on http://localhost:3000/");
});
