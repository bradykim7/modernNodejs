
// session is save the data at the server
// cookie is save the data at the browser
// session is lasting during when web browser is open.
const express = require('express');
const session = require('express-session');

const app = express();

/*
    session method options
    name: cookie's name
    store: where you want to store
    cookie: references about cookie you'll make
    secret: secret key
    resave: 세션이 변경되지 않았어도, 세션 저장ㄷ소에 반영할지 설정 (true or false)
    saveUninitalized: 초기화되지 않은 세션을 세션 저장소에 저장할지 안할지 ( true or false)
 */
app.use(session({
    secret:'secret key',
    resave:false,
    saveUninitialized:true,
    cookie:{
        maxAge: 60* 1000
    }
}));

// req.session object method regenerate(), destroy(), reload(), save()
app.use(function(req, res){

    req.session.now = (new Date()).toUTCString();
    res.send(req.session);

})

app.listen(52273,()=>{console.log('Server Running at http://127.0.0.1:52273')});
