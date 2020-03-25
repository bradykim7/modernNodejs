const express= require('express');
const multipart =require('connect-multiparty');
const fs = require('fs');

const app = express();

app.set('view engine', 'pug');
app.use(multipart({uploadDir:__dirname+'/multipart'}))

app.get('/',function(req, res){
    res.render('upload')
})

// 만약 특정페이지에서만 특정 미들웨어를 적용하고 싶을 경우
/*  이런식으로 활용
    app.post('/', multipart, function(req, res){ ... });
 */

app.post('/', function(req, res){
    let comment = req.body.comment;
    let imageFile = req.files.image;

    // file naming module is uuid ; find node-uuid
    if(imageFile && imageFile.size > 0){
        let name = imageFile.name;
        let path = imageFile.path;
        let type = imageFile.type;

        if(type.indexOf('image') != -1){

            let outputPath = __dirname +'/multipart'+Date.now()+ '_'+name;
            fs.rename(path, outputPath, function(error){
                res.redirect('/');

            })
        }else{
            // not image files
            fs.unlink(path, function(error){
                res.sendStatus(400);
            })
        }
    }else{
        res.sendStatus(404);
    }

})

app.listen(52273,()=>{console.log("Server Runnging at http://127.0.0.1:52273")})