var fs = require('fs');
var path = require('path');
var mydata = '这是mydata的数据';
fs.readFile(__dirname+'/test.txt',{flag:'r+',encoding:'utf8'},(err,data)=>{
  if(err) {
    console.log('something error');
    return;
  }
  // fs.appendFile(__dirname+'/copytest.txt',(err,data)=>{
  //   if(err) {
  //     console.log('append error');
  //     return;
  //   }
  //   console.log('追加成功');
  // });
  // console.log(data.toString());
  fs.writeFile(__dirname+'/copytest.txt',data,(err,data)=>{
    if(err){
      console.log('write error');
      return;
    }
    console.log('写入成功')
  });

})
