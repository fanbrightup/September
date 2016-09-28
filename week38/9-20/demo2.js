function Person() {
  // 构造函数 Person() 定义的 `this` 就是新实例对象自己
  this.age = 0;
  setInterval(function growUp() {
    // 非严格模式下，growUp() 函数其内部的`this`为全局对象
    // 不同于 Person() 中定义的 `this`
    this.age++;
    console.log(this.age);
  }, 1000);
}

var p = new Person();
