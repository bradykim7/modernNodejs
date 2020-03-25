const express = require('express');

const app = express();

app.use(function(request, response){

    let agent= request.header('user-agent');

    if(agent.toLowerCase().match(/chrome/)){
        response.send('<h1>Hello Chrome</h1>')
        console.log(request.headers);

    }else{
        response.send('<h1>Hello Express</h1>')
        console.log(request.headers);
    }
})

app.listen(52273,'192.168.1.193', () => {console.log('Server Running at http://127.0.0.1:52273')});

