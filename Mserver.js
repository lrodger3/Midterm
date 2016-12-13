var express = require('express');
// Create Express App Object \\
var app = express();
var PORT = process.env.PORT||8080

app.use(express.static(__dirname + '/public'));

app.listen(PORT,()=>{
  console.log("Server Up! on port " + PORT);
});
