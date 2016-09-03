function fun(){
  return {
    id:'007',
    name:'CC',
    age:28,
    person:{
      a:'11',
      b:'22',
      c:'33'
    }
  };
};
var {id:my_id , name:my_name , age:my_age , person} = fun();
console.log(my_id);
console.log(my_name);
console.log(my_age);
console.log(person['b']);
