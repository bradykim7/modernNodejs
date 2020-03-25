const express = require('express');
const app = express();

app.get('/page/:id', function(request, response){
    let name = request.params.id;

    response.send('<h1>'+name+'' +' Pages</h1>');

})

app.listen(52273, ()=> console.log("Server Running At http://127.0.0.1:52273"));