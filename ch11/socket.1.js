const socketio = require('socket.io');
const express = require('express');

const pug = require('pug');

const app = express();
app.set('view engine', 'pug');
// 웹서버 생성
const server= app.listen(52273,() =>{console.log("Server Running at http://127.0.0.1:52273")});

app.get('/', function(req ,res){
    res.render('index.pug');
})

// 소켓 서버를 생성 및 실행
const io = socketio.listen(server);
io.sockets.on('connection', function(socket){

    //socket event
    socket.on('rint', function(data){
        console.log('Client Send Data :',data);

        socket.emit('smart', data);
    })

});
//public
io.sockets.on('connection', function(socket){
    socket.on('public', function(data){
        //public
        io.sockets.emit('smart',data);

        })
});
//broadcast
io.sockets.on('connection', function(socket){
    socket.on('broadcast', function(data){
        //broadcast
        socket.broadcast.emit('smart', data);
    })
});

let id = 0;
//private
io.sockets.on('connection', function(socket){

    id= socket.id;
    socket.on('private', function(data){
        io.sockets.to(id).emit('smart', data);
    })
});