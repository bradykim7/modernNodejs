const express = require('express');
const app = express();

app.use(function(request, response){
    //  User- Agent 속성 추출
    let agent = request.header('User-Agent');
    console.log(request.headers);
    console.log(agent);

    response.sendStatus(200);
});

app.listen(52273, ()=>{console.log("Server Running at the http://127.0.0.1:52273")});