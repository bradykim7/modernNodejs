const express = require('express');
const multipart = require('connect-multiparty');

const app = express();

app.use(multipart({uploadDir:__dirname+'/multipart'}));
app.set('view engine', 'pug');

app.get('/',function(req, res){
    res.render('upload');
});

app.post('/',function(req, res){

    // body에는 파일과 관련된 정보가 없고, files안에는 모든 파일 정보가 있다.
    console.log(req.body);
    console.log(req.files);

    res.redirect('/');
});

app.listen(52273, () => {console.log("Server Running at http://127.0.0.1:52273")})