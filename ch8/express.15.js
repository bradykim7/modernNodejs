const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

app.use(cookieParser());

app.get('/getCookie', function(request, response){
    response.send(request.cookies);
})

app.get('/setCookie', function(request, response){
    response.cookie('json',{
        name:'cookie',
        property:'delicious'
    });

    response.redirect('/getCookie');
})

// cookie 매소드의 3번째 매개변수
/*
    response.cookie('string', 'cookie', { maxAge:6000, secure:true});
    httpOnly
    secure
    expires
    maxAge
    path

 */

app.listen(52273, () => {console.log("Server Running At http://127.0.0.1:52273")})