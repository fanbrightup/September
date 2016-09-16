var fs = require('fs');
// flag是必填内容
fs.open(__dirname+'/test.txt','r',(err,data)=>{
  if(err){
    console.log('error');
    return;
  }
  console.log(data);
  console.log('hhh')

});

// fs.mkdir(__dirname+'/fsDir',(err)=>{
//   if(err){
//     console.log('创建目录失败');
//     return ;
//   }
//   console.log('创建目录成功');
// })
