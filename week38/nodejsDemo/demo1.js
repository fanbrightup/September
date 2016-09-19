'use strict';

console.log(__filename);
console.log(__dirname);

var t1 = setTimeout(()=>{
  console.log('timeout');
},4000);

// clearTimeout(t1);
