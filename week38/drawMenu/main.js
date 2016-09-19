'use strict';
var a_list = document.querySelectorAll('a');


for(let i = 0;i<a_list.length;i++){
  a_list[i].onclick=toggleMenu;
  a_list[i].onmouseover=toggleMenu;
  a_list[i].onmouseleave=toggleMenuLeave;

  // a_list[i].addEventListener('click',toggleMenu);
}

function toggleMenu(){

  let ul_id = this.title;
  let menustyle =  document.getElementById(ul_id).style;
  // 因为style属性无法读取到外部样式表,所以display的属性为空,所以会造成第一次点击无反应,实际上是为它赋了none,要反过来,上来替他赋予你想要显示的值即可.这样无论原来的display属性有没有值都可以达到预定的效果
  // 要点两次  menustyle.display == 'none'?menustyle.display = 'block':menustyle.display = 'none';


// 这是正确的顺序
  if(menustyle.display == 'block'){
    menustyle.display = 'none';
  }else{
    menustyle.display = 'block';
  };
  // evt.preventDefault();
  return false;
}
function toggleMenuLeave(){
  let ul_id = this.title;
  let menustyle =  document.getElementById(ul_id).style;
  menustyle.display = 'none';
}
