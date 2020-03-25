const express = require('express');
const app = express();
const port = 52273;


app.get('/index', function(request, response){
    response.send('<h1>Index Pages</h1>');
})

app.all('*', function(request, response){
    response.status(404).send('<h1>Erorr Ocuur</h1>')
})

app.listen(port, ()=>{console.log("Server Running at http://127.0.0.1:52273")});

