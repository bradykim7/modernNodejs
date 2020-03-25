const express = require('express');
const pug = require('pug');
const socketio = require('socket.io');

const app = express();
const port = 52273;
const server = app.listen(port, ()=>{console.log("Server is Running on http://127.0.0.1:"+port)});

const io = socketio.listen(server);

// MiddleWare Connecting
app.set('view engine', 'pug');

app.get('/', function(req, res){
    res.render('index2.pug')
});

// Create Socket Server
io.sockets.on('connection', function(socket){
    let roomName = null;

    // attaching Event
    socket.on('join', function(data){
        console.log("DATA is "+data);
        roomName = data;
        socket.join(data);
    });

    socket.on('message', function(data){
        io.sockets.to(roomName).emit('message', 'test');
    });
});