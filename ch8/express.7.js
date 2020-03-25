const express = require('express');
const app = express();

app.use(function(request, response, next){
    request.number = 52;
    response.number = 273;
    next();
});

app.use(function(request, response, next){
    response.send('<h1>'+request.number+':'+response.number+'</h1>');
})

app.listen(52273, () => {console.log("Server Running at the http://127.0.0.1")});

