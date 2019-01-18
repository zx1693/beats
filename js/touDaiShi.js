var search_btn=document.getElementsByClassName("studio_search")[0];
console.log(search_btn);

search_btn.onclick = function () {
    var Id = search_btn.getAttribute("data-id");
    console.log(Id);
    window.open("touDaiShiZiYe.html?"+Id);
}
