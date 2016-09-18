var fs = require('fs');

var readerStream = fs.createReadStream('../input.txt');
var writerStream = fs.createWriteStream('./output.txt');
var data = '';
readerStream.on('error',(err)=>{
  console.log(err.stack);
})
readerStream.on('data',(chunk)=>{
  data+= chunk;
});
readerStream.on('end',()=>{
  console.log(data);
})

readerStream.pipe(writerStream);
writerStream.on('error',()=>{
  console.log('eeeee');
})
writerStream.on('finish',()=>{
  console.log('写入完成')
})
