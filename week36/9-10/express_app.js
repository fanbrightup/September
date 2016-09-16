// var express = require('express');
// var app = module.exports = express.createServer();
// var io = require('socket.io').listen(app);
var app = require('express')()
  , server = require('http').createServer(app)
  , io = require('socket.io').listen(server);


app.listen(3000,'127.0.0.1');
app.get('/',(req,res)=>{
  res.sendFile(__dirname + '/expressIndex.html');
});
io.sockets.on('connection',(socket)=>{
  socket.emit('welcome',{text:'OH HAI! U R CONNECTED!'});
});
