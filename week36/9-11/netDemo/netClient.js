'use strict';
var net = require('net');
var repl = require('repl');
// var client = net.connect({port:3000});
// var client = net.createConnection(3000);
var nickName;
var client;
var globalCallback;
var connectServer = ()=>{
  var client = net.connect({port:3000});
  client.on('connect',()=>{
    console.log('连接就绪.');
  });
  client.on('data',(data)=>{
      //  使用toString()来解决buffer乱码的问题
      var jsonData = JSON.parse(data.toString());
      globalCallback && globalCallback(null,`${jsonData.nickName}: ${jsonData.message}`);
  });
  client.on('close',(hasError)=>{
    console.log('client closed,hasError:'+hasError);
    process.exit();
  });
  return client;
}


console.log('Welcome to Console chat');
console.log('Please input your nick name');
var replInstance = repl.start({
  eval:(cmd,context,filename,callback)=>{
    cmd = cmd.replace('\n','');
    if(!nickName){
      nickName = cmd;
      console.log('开始连接服务器....');
      client = connectServer();
      globalCallback = callback;
      return;
    }
    if(cmd === 'exit'){
      client.end();
      return;
    }
    var data = JSON.stringify({nickName:nickName,message:cmd});
    client.write(data);
    globalCallback(null,`${nickName}: ${cmd}`);
  }
})
