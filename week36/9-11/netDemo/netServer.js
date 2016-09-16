'use strict';
var net = require('net');
var server = net.createServer();
var socketlist = new Set();
server.on('connection',(socket)=>{
  socketlist.add(socket);
  console.log('new connected');
  socket.write('new connected');
  socket.on('data',(data)=>{
    socketlist.forEach((client)=>{
      //  给不是本身发信息
      if(socket!== client){
        client.write(data);
      }
    })
  });
  socket.on('error',(err)=>{
    console.error('socket error:',err);
  })
  socket.on('close',(hasError)=>{
    socketlist.delete(socket);
    console.error(`client断开,当前客户端数量:${socketlist.size},是否异常退出：${hasError}`);
  });

});

server.on('error',(err)=>{
  console.log('server error:'+err);
})
server.on('close',()=>{
  console.log('closed');
});


//  监听端口，启动服务器
server.listen(3000,()=>{
  var addr = server.address();
  console.log(`Server started,listening port ${addr.port}.`);
});
