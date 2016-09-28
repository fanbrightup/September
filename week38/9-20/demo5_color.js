global.color = 'green';
var obj = {color:'red'};
function showColor (){
  console.log(this.color);
    console.log(this);
}

// showColor.call(this);  //green
// showColor.call(global);  //green
showColor.call(obj); //red
// showColor();
