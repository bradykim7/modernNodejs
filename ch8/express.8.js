const express = require('express');
const app = express();

app.get('/a',function(request, response){
    response.send('<a href="/b">Go to B</a>');
});

app.get('/b', function(request, response){
    response.send('<a href="/a">Go to A</a>');
});

app.listen(52273,() =>{console.log('Server Running at http://127.0.0.1:52273')})