var http = require('http');
var fs = require('fs');
var socketIo = require('socket.io');
var server = http.createServer((req,res)=>{
  fs.readFile('./test1_index.html',(error,data)=>{
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end(data,'utf8');
  });
}).listen(3000,'127.0.0.1');
console.log('Server running at http://127.0.0.1');
var io = socketIo.listen(server);


io.sockets.on('connection',(socket)=>{
    socket.on('message',(data)=>{
  socket.broadcast.emit('pushMessage',data);
  socket.emit('pushMessage',data);
});
});
