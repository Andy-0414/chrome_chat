const express = require('express')
const app = express()
var http = require('http').Server(app);
var io = require('socket.io')(http);

// chatServer
io.on('connection', (socket) => {
    socket.on('sendMsg',data=>{
        io.emit('getMsg',data)
    })
})

http.listen(3000, () => {
    console.log("server open");
})