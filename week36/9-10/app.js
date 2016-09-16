var http = require('http');
var fs = require('fs');
var count = 0;

var server = http.createServer(   (req,res)=>{
  fs.readFile('./index.html',(error,data)=>{
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end(data,'utf-8');
  });
}).listen(3000,'127.0.0.1');
console.log('Server running at http://127.0.0.1:3000');

var io = require('socket.io').listen(server);

io.sockets.on('connection',(socket)=>{
  count++;
  console.log('User connected. ' + count + ' users(s) present');
  socket.emit('users1',{number:count});
  socket.broadcast.emit('users1',{number:count});
  socket.on('disconnect',()=>{
    count--;
    console.log('User disconnected. ' + count + ' users(s) present');
    socket.broadcast.emit('users1',{number:count});
  })
})
