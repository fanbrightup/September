// 让初始化函数只执行一次,其他的都是对第一次初始化结果的内存空间的引用,即可实现单例模式
var SecretStore=(function SecretStores(){
  var data , secret,newSecret;

  data = 'secret';
  secret = ()=>{  return data; };
  newSecret = function(newValue){
    data = newValue;
    return secret();
  }

  return{
    getSecret:secret,
    setSecret:newSecret,
  }
})();

var secret =SecretStore;

console.log(secret.getSecret());

console.log(secret.setSecret('foo'));

console.log(secret.getSecret());

var secret2 = SecretStore;

console.log(secret2.getSecret());
console.log(secret.getSecret());
console.log(secret.setSecret('sss'));
console.log(secret.getSecret());
console.log(secret2.getSecret());
console.log(secret2.getSecret());
