const express = require('express');
const app = express();

app.use(function(request, response, next){
    let name = request.query.name;
    let region = request.query.region;

    response.send('<h1>'+name+'-'+region+'</h1>')
})

app.listen(52273, ()=>{console.log('Server Runing at http://127.0.0.1:52273')})