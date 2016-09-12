'use strict';

var http = require('http');
var io = require('socket.io');
var userCount = 0;

var httpServer = http.createServer();
var server = io(httpServer);
server.on('connection',(socket)=>{
  userCount ++;
  socket.emit('welcome','Welcome to here');
  socket.on('disconnect',()=>{
    userCount --;
    console.log('client disconnect,current users count:',userCount);
  });
});
httpServer.listen(3000);
console.log('Server started .Listening port %s',3000);
