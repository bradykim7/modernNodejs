const express = require('express');
const pug = require('pug');
const socketio =require('socket.io');

const app =express();
const port = 52273;
const server = app.listen(port, ()=>{console.log('Server Running at http://127.0.0.1:'+port)});

// web setting
app.set('view engine', 'view');
app.get('/', function(req, res){
    res.render('chat.pug');
});

// socket server setting
const io = socketio.listen(server);
io.sockets.on('connection', function(socket){
   socket.on('message', function(data){
       io.sockets.emit('message', data)
   });
});