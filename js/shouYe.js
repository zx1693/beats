var oUl=document.getElementsByClassName("list_1")[0].firstElementChild;
var oUlTwo=document.getElementsByClassName("list_1")[1].firstElementChild;
var list_1=document.getElementsByClassName("list_1")[0];
var list_2=document.getElementsByClassName("list_1")[1];
var oUlA = list_1.lastElementChild.getElementsByTagName("a")[0];//第一个购买按钮
var bg_font=document.getElementsByClassName("bg_font")[0];
var bg_fontTwo=document.getElementsByClassName("bg_font")[2];
var li_a=document.getElementsByClassName("li_a")[0];
var li_aTwo=document.getElementsByClassName("li_a")[2];
var corBtn=li_a.children;
var corBtnTwo=li_aTwo.children;
var i=0;
corBtn[0].onclick=function(){
    lt(oUl);
}
corBtnTwo[0].onclick=function(){
    lt(oUlTwo);
}
corBtn[1].onclick= function () {
    rt(oUl);
};
corBtnTwo[1].onclick= function () {
    rt(oUlTwo);
};
function rt(da){
    da.style.transition="1s ease";
    da.style.left=-428+"px";
}
function lt(da){
    da.style.transition="1s ease";
    da.style.left=-178+"px";
}



list_1.onmouseover=function () {
    bg_font.style.display="none";
    li_a.style.display="block";
}
list_1.onmouseout=function () {
    bg_font.style.display="block";
    li_a.style.display="none";
}
list_2.onmouseover=function () {
    bg_fontTwo.style.display="none";
    li_aTwo.style.display="block";
}
list_2.onmouseout=function () {
    bg_fontTwo.style.display="block";
    li_aTwo.style.display="none";
}

var oUla =document.getElementsByClassName("list_2")[0].lastElementChild.children[0];//第一个购买按钮

oUla.onclick = function () {
    var Id = oUla.getAttribute("data-id");
    console.log(Id);
    window.open("shouYeZiYe.html?"+Id);
}