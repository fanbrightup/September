'use strict';
//  声明一个数组用来保持每一个选项标签
var li_list = [];
for(let i =1;i<6;i++){
   li_list[i] = document.querySelector('#li'+i);
}
//  为每个选项卡赋一个点击函数
for(let i=1;i<6;i++){
  li_list[i].onclick = myClick;
}

var choosenOne = '';
var choosenLi = 'li1';
//  文章隐藏函数
function  myHidden(choosenLi,choosenId){
  if(choosenId=='') choosenId = 'a1';
  let id = '#'+choosenId;
  let articleNum = document.querySelector(id);
  let class_name = articleNum.getAttribute('class');
  class_name += ' hidden ';
  articleNum.setAttribute('class',class_name);
}
//  文章显示函数
function removeHidden(choosenLi,articleId){
  var choose = document.getElementById(articleId);
  var myclass = choose.getAttribute('class').replace(' hidden','');
  choose.setAttribute('class',myclass);
}
//  选项栏的onclick函数
function myClick(){
  myHidden(this.id,choosenOne);
  removeHidden(this.id,this.title);
  choosenOne = this.title;
}
