'use strict';

var io = require('socket.io');
var userCount = 0;
//  通过io创建server
var server = io();
server.on('connection',(socket)=>{
  userCount ++;
  socket.emit('welcome',{'message':'Welcome to here'});
  socket.on('disconnect',()=>{
    userCount --;
    console.log('client disconnect,current users count:',userCount);
  })
});
server.listen(3000);
console.log('Server started .Listening port %s',3000);
