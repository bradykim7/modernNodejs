const express = require('express');
const app = express();

app.use(function(request, response, next){
    console.log('First Middleware');
    next();
});

app.use(function(request, response, next){
    console.log('Second Middleware');
    next();
});

app.use(function(request, response, next){

    response.writeHead(200,{'Content-Type':'text/html'});
    response.end('<h1>express Basic</h1>');
})

app.listen(52273,()=>{console.log('Server Running At 127.0.0.1:52273')});