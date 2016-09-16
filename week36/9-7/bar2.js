const rate = 6.4;
// module.exports = (count)=>{
//   return count * rate;
// }
module.exports = {
  toUSD:(count)=>{
    return count * rate;
  },
  sayHello:()=>{
    console.log('我说 hello');
    return 'hhhhhh'
  }
}
