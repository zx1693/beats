var getId = window.location.search.substring(1,);
// console.log(getId);
var  oDiv = document.getElementsByClassName("banner")[0];
var oLi = document.getElementsByClassName("sec")[0].children[0].children;
var img_All=document.getElementsByClassName("img_all")[0];


var dian = document.getElementsByClassName("dian")[0];
var oBtn =dian.getElementsByTagName("span");
var oImg =document.getElementsByClassName("img_all")[0].children;
var oUl =dian.getElementsByTagName("ul")[0].children;
console.log(oUl);
var seLe=document.getElementsByClassName("sec")[0];
// console.log(seLe);
var  j=0;

ajax("post","js/toudai.json","getId",function (data) {
    var daZ= JSON.parse(data);
    // console.log(daZ);
    // console.log(daZ["color"].黑色[0]);
    oDiv.innerHTML=`
    <img class="banner_3" src="${daZ[getId].img}" alt="">
    <div class="text-inner">
        <h1>
            ${daZ[getId].title}
            <sup style="color: red;">${daZ[getId].title_sup}</sup>
             ${daZ[getId].title_last}
        </h1>
        <p class="describe">
          ${daZ[getId].music}
            <br>
            <br>
           ${daZ[getId].title}
            <sup style="color:red;">${daZ[getId].title_sup}</sup>
           ${daZ[getId].Describe}
        </p>
        <p class="price">
            RMB<span>2,863</span>
            <a href="javascript:0">购买</a>
        </p>
    </div>
    `;
    for(let w=0;w<oLi.length;w++){
        oLi[w].onclick =function () {

            var pv =oLi[w].getElementsByTagName("p")[0].innerText;//获取到颜色
            // console.log(typeof pv);
            // console.log(daZ["color"][pv][0]);
            // console.log(1);
            img_All.innerHTML=`
             <li id="show"><img src="${daZ["color"][pv][0]}"  alt=""></li>
             <li><img src= "${daZ["color"][pv][1]}" alt=""></li>
             <li><img src= "${daZ["color"][pv][2]}"  alt=""></li>
            `;
            for(let i=0;i<oImg.length;i++){
                oImg[i].id ="";
                oUl[i].id = "";
            }
            oUl[j].id="bg_ys";
            oImg[j].id ="show";
            console.log(j);
        }
    }
})


// 轮播图
oBtn[1].onclick =function () {
    console.log(1);
    j++;
    if(j>2){
        j=0;
    }
    for(let i=0;i<oImg.length;i++){
        oImg[i].id = "";
        oUl[i].id = "";
    }
    oImg[j].id ="show";
    oUl[j].id ="bg_ys";
}
oBtn[0].onclick =function () {
    j--;
    if(j<0){
        j=2;
    }
    for(let i=0;i<oImg.length;i++){
        oImg[i].id = "";
        oUl[i].id = "";
    }
    oImg[j].id ="show";
    oUl[j].id ="bg_ys";
}
for(let k=0;k<oUl.length;k++){
    oUl[k].onclick =function () {
        for(let l=0;l<oUl.length;l++){
            oImg[l].id = "";
            oUl[l].id = "";
        }
        oImg[k].id ="show";
        this.id="bg_ys";
        j=k;
    }
}