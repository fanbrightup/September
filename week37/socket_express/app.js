'use strict';
var http = require('http');
var express = require('express');
var SocketIo = require('socket.io');

var app = express();
app.use(express.static(__dirname+'/public'));
var server = http.Server(app);
var io = new SocketIo(server,{
  pingTimeout:1000*10,
  pingInterval:1000*2,
  transport:['websocket','polling'],
  allowUpgrades:true,
  httpCompression:true,
  // path:'',// 设置可以取到socket.io.js这个文件的前缀路径名,不为空,可以不写这项,默认为/socket.io/socket.io.js
  // serverClient:false,// 是否提供客户端js,默认提供,即服务器运行起来后,可以在/socket.io/socket.io.js下找到这个脚本文件.

});

// 用户认证
  io.set('authorization',(handshakeData,accept)=>{
    if(handshakeData.headers.cookie){
      accept(null,true);//  验证通过
    }else{
      accept('Authorization Error',false);
    }
  });

  io.on('conncetion',(socket)=>{
    console.log(socket.id);
    console.log(socket.handshakeData);
    socket.emit('welcome','welcome');
  })


server.listen('8000',(err)=>{
  if(err)  return console.error(err);

  console.log('Server started,listening port %s',server.address().port);
})
