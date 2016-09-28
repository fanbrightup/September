function getNumber(){
  var p = new Promise((resolve,reject)=>{
    setTimeout(()=>{
      var num = Math.ceil(Math.random()*10);
      if(num < 5){
        resolve('数字小于五');
      }else{
        reject('数字不正确,大于五');
      }
    },2000);
  });
  return p;
}

getNumber().then((data)=>{
      console.log('resolve');
      console.log(data);
    } ,  (data)=>{
      console.log('reject');
      console.log(data);
});
