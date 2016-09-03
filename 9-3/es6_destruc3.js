//  指定默认值:
//      默认值生效的条件是,对象的属性值严格等于undefined


//  解构不仅可以用于数组,还可以用于对象
// var {x = 3} = {x:undefined};
// console.log(x);
//
// var {y = 4} = {y:undefined};
// console.log(y);
// // 要取属性必须为对象,数组不行
// var {length} = "";
// console.log(length);
//  只有当fun()中不传参数是即直接调用fun(),才会出发定义函数时的解构赋值
function fun({x,y}={x:0,y:0}){
  console.log(x);
  console.log(y);
}
fun({x:1,y:2});
fun({});
fun({x:100});
fun();
