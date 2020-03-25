const express = require('express');
const app = express();

app.use(express.static(__dirname+'/public'));
app.use(function(request, response){
    response.writeHead(200, {'Content-Type':'text/html'});
    response.end('<img src = "/henry.jpeg" width=100% />');
})

app.listen(52273, ()=>{console.log("Server Running at http://127.0.0.1:52273")});
