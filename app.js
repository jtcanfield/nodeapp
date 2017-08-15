const express = require('express');
const app = express();
console.log("why.... please.... save me");
app.get('/', function(req, res){
  res.send('hello world');
});

// app.listen(3000);
