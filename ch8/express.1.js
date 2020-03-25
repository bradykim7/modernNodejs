const express = require('express');

const app = express();

// event listener on
app.use(function(request, response){
    response.writeHead(200, {"Contont-Type":"text/html"});
    response.end('<h1>Hello Express</h1>')
})

app.listen(52273, ()=> {console.log("Server Running with Express module at http://127.0.0.1:52273")})