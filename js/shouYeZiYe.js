var getId = window.location.search.substring(1,);
// console.log(getId);
var banner=document.getElementsByClassName("banner")[0];
var cr_rt1=document.getElementsByClassName("cr_rt")[0];
var sec=document.getElementsByClassName("sec")[0];

//轮播获取的
var j =0;
var dian=document.getElementsByClassName("dian")[0];
var oUl=dian.getElementsByTagName("ul")[0].children;
var btn=dian.getElementsByTagName("span");
var oImg= document.getElementsByClassName("img_all")[0].children;

// console.log(sec_ul.length);
// console.log(oImg);

ajax("get","js/toudai.json","getId",function (data) {
        var  sju=JSON.parse(data);
        // console.log(sju.color1);
        // console.log(sju[getId]);
        // console.log(sju[getId].img);
    // console.log(sju.color1);
    banner.innerHTML=`
          <img class="banner_3"
         src=${sju[getId].img}  alt="">
    <div class="text-inner">
        <h1>
            ${sju[getId].title}
            <sup style="color: red;">3</sup>
            ${sju[getId].title_last}
        </h1>
        <p class="describe">
         ${sju[getId].music} 
            <br>
            <br>
            ${sju[getId].title}
            <sup style="color:red;">   ${sju[getId].title_sup} </sup>
           ${sju[getId].Describe} 
        </p>
        <p class="price">
            RMB<span>2,863</span>
            <a href="javascript:0">购买</a>
        </p>
    </div>`;

        // console.log(sju[getId].src[1][2]);
    sec.innerHTML=`
                <ul>
                    <li>
                        <div class="cor">
                            <img src="${sju[getId].src[0][1]}"
                                 alt="">
                        </div>
                        <p> 哑光黑色</p>
                    </li>
                    <li>
                        <div class="cor">
                            <img src="${sju[getId].src[1][2]}"
                                 alt="">
                        </div>
                        <p>丝缎金</p>
                    </li>
                    <li>
                        <div class="cor">
                              <img src="${sju[getId].src[2][3]}"
                                 alt="">
                        </div>
                        <p>丝缎银</p>
                    </li>
                    <li>
                        <div class="cor">
                            <img src="${sju[getId].src[3][4]}"
                                 alt="">
                        </div>
                        <p>亮黑色</p>
                    </li>
                    <li>
                        <div class="cor">
                            <img src="${sju[getId].src[4][5]}"
                                 alt="">
                        </div>
                        <p>亮白色</p>
                    </li>
                    <li>
                        <div class="cor">
                            <img src="${sju[getId].src[5][6]}"
                                 alt="">
                        </div>
                        <p>玫瑰金色</p>
                    </li>
                      <li>
                        <div class="cor">
                            <img src="${sju[getId].src[6][7]}"
                                 alt="">
                        </div>
                        <p>金色</p>
                    </li>
                     <li>
                        <div class="cor">
                            <img src="${sju[getId].src[7][8]}"
                                 alt="">
                        </div>
                        <p>银色</p>
                    </li>
                     <li>
                        <div class="cor">
                            <img src="${sju[getId].src[8][9]}"
                                 alt="">
                        </div>
                        <p>红色</p>
                    </li>
                     <li>
                        <div class="cor">
                            <img src="${sju[getId].src[9][10]}"
                                 alt="">
                        </div>
                        <p>Defiant Black-Red</p>
                    </li>
                </ul>`;
var sec_ul=sec.getElementsByTagName("ul")[0].children;
     // console.log(sec_ul);
var img_all=document.getElementsByClassName("img_all")[0];
    // console.log(img_all);
    for (let i=0;i<sec_ul.length;i++){
        sec_ul[i].onclick=function () {
            var sec_ul_p =sec_ul[i].getElementsByTagName("p")[0].innerText;
            console.log(sec_ul_p);
        for(k in sju.color1){
           var kk=sju.color1[k];
            console.log(k);
            if(k==sec_ul_p){
                img_all.innerHTML=`
                    <li id="show"><img src=${kk[0].src} alt=""></li>
                    <li><img src=${kk[1].src} alt=""></li>
                    <li><img src=${kk[2].src} alt=""></li>
            `;
                for(let i=0;i<oImg.length;i++){
                    oImg[i].id ="";
                    oUl[i].id = "";
                }
                oUl[j].id="bg_ys";
                oImg[j].id ="show";
            }
        }
    }
}
    var sec_ul=sec.getElementsByTagName("ul")[0].children;
 //轮播
    btn[1].onclick =function () {
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
    btn[0].onclick =function () {
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
    for(let k=0;k<oUl.length;k++) {
        oUl[k].onclick = function () {
            for (let l = 0; l < oUl.length; l++) {
                oImg[l].id = "";
                oUl[l].id = "";
            }
            oImg[k].id = "show";
            this.id = "bg_ys";
            j = k;
            console.log(k);
        }
    }

});

