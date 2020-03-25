const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser= require('body-parser');

const app = express();

app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:false}));
app.set('view engine', 'pug');

app.get('/',function(request, response){
    if(request.cookies.auth){
        response.send('<h1>Login Sucess!</h1>')
    }else{
        response.redirect('/login');
    }
});

app.get('/login', function(request, response){
    response.render('login');

});

app.post('/login', function(request, response){
    let login = request.body.login;
    let password = request.body.password;

    console.log(login, password);
    console.log(request.body);

    if(login == 'rint' && password =='1234'){
        // making cookie
        response.cookie('auth',true);
        response.redirect('/');
    }else{
        response.redirect('/login')
    }

})


app.listen(52273, ()=>{console.log("Server Running at http://127.0.0.1:52273")})