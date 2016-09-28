'use strict';
function Person(){
  this.age = 0;
  this.name = 'fan';
  setInterval(() => {
    this.age++; // 'this'正确地指向了 person 对象
    console.log(this);
    console.log(this.age);
  }, 1000);
}

var p = new Person();
