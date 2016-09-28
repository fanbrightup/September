var a = 5;
var b = 10;

function tags(str,...vals) {
  console.log(str);
  console.log(vals);
  console.log(str[0]); // "Hello "
  console.log(str[1]); // " world "
  console.log(str[2]); // "  "
  console.log(vals[0]);  // 15
  console.log(vals[1]);  // 50
  return "itbilu.com";
}

var val = tags`Hello ${ a + b }world ${ a * b}`;
// "itbilu.com"
console.log(val);
