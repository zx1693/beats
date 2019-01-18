var btn = document.getElementsByClassName("btn");
var category = document.getElementsByClassName("category");
for (let i = 0; i < category.length; i++) {
    btn[i].onclick = function () {
        if (category[i].offsetHeight == 0) {
            category[i].style.transition = "1s ease";
            category[i].style.height = "80px";
            this.innerText = "收起内容 -"
        } else {
            category[i].style.transition = "1s ease";
            category[i].style.height = "0px";
            this.innerText = "更多内容 +"
        }
    }
}

var hot_1 = document.getElementsByClassName("hot_1");
// console.log(hot_1);
var ppArr = document.getElementsByClassName("pp");
var jnArr = document.getElementsByClassName("jn");

for (let j = 0; j < ppArr.length; j++) {

    ppArr[j].onclick = function () {
        for(let k=0; k < ppArr.length; k++){
            hot_1[k].style.height="72px";
            hot_1[k].style.background = "#e8e6e6";
            jnArr[k].innerText="+";
        }
        if (hot_1[j].offsetHeight < 100) {
            hot_1[j].style.transition = ".5s ease"
            hot_1[j].style.height = "219px";
            hot_1[j].style.background = "#f7f7f7";
            jnArr[j].innerText="-";
        } else {
            hot_1[j].style.transition = ".5s ease"
            hot_1[j].style.height = "72px";
            hot_1[j].style.background = "#e8e6e6";
            jnArr[j].innerText="+";
        }
    }

}