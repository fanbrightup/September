var map = new Map();
map.set('id','001');
map.set('name','CC');
console.log(map);
console.log(typeof map);

for(let [key] of map){
  console.log(key + ' is ');
};
for(let [,value] of map){
  console.log(value + ' is ');
};
for(let [key,value] of map){
  console.log(key + ' is '+value);
};
