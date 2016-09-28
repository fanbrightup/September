global.color = 'green';
var obj = {color:'red'};
function showColor (){
    console.log(this.color);
}

showColor.call(global);    //green
var objShowColor = showColor.bind(obj);
objShowColor();    //red
        
