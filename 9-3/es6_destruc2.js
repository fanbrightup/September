// let [foo,[[bar],base]] = [1,[[0,2],3]];
// console.log(foo);
// console.log(bar);
// console.log(base);
//
// let [,,third] = ['first','second','third'];
// console.log(third);
//
// let [one, , three] = ['One',,'Two','Three'];
// console.log(one);
// console.log(three);
let [head,...tail] = [0,1,2,3,4,5,6,7,8,9];
console.log(head);
console.log(tail);
let [x,y] = [1,2,3];
console.log(x);
console.log(y);
let [a,[b],c] = [1,[2,3],4];
console.log(a);
console.log(b);
console.log(c);
