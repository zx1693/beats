var  foots = document.getElementsByTagName("footer")[0];
var  heads = document.getElementsByTagName("header")[0];
ajax("get","foot.html","",function (data) {
    foots.innerHTML=data;
})
ajax("get","head.html","",function (data) {
    heads.innerHTML=data;
})


function ajax(method, url, data, fn) {
    let htp = null;
    try {
        htp = new XMLHttpRequest()
    } catch (err) {
        htp = new ActiveXObject("Microsoft.XMLHTTP")
    }
    if (method == "get") {
        htp.open(method, url + "?" + data);
        htp.send()
    } else {
        htp.open(method, url);
        htp.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
        htp.send(data)
    }
    htp.onreadystatechange = function () {
        if (htp.readyState == 4 && htp.status == 200) {
            fn(htp.responseText)
        }

    }
}