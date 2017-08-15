const express = require('express');
const app = express();
console.log("Server active on http://localhost:3000/");
app.get('/', function(req, res){
  res.send('hello world');
});

app.listen(3000);
