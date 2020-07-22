

//网页头部结构区域 鼠标划过状态
var  hh = document.getElementById('header-header');
var  hi = hh.getElementsByClassName('header-item');
var  hs = hh.getElementsByClassName('header-section');

for( var i = 0; i < hi.length; i++){
    (function(i){
        hi[i].onmouseover = function(){
            for(var j = 0; j < hi.length; j++){
                hs[j].style.display = "none";
            }
            hs[i].style.display = "block";
            hh.style.backgroundColor = "#ffffff";
        }
        hi[i].onmouseout = function(){
            hh.style.background = "none";
            hs[i].style.display = "none";
        }
    }(i))
}


/*  返回顶部按钮的滚动监听事件 */
var top1 = document.getElementById('top');
window.onscroll= function(){  
    if($(window).scrollTop() >= 1000){                 // 判断  $(window) 的  滚动条到顶部的距离 大于等于699
        top1.style.display = "block";
    }else if($(window).scrollTop() < 1000){
        top1.style.display = "none";
    }
    
    var qheader = document.getElementsByTagName('header')[0];
     var nava = document.getElementById("aboutNav");      //  获取 nav_js 的 id
    if($(window).scrollTop() >= 600){                 // 判断  $(window) 的  滚动条到顶部的距离 大于等于699
        nava.style.position = "fixed";
        nava.style.top = "0";
        nava.style.zIndex = "10";
        nava.style.backgroundColor ="#ffffff";
        qheader.style.display = "none";
    }else if($(window).scrollTop() < 600){
        nava.style.position = "";
        qheader.style.display = "block";
    }
    if($(window).scrollTop() < 800){
        adiv.style.left = "16px";
    }else if($(window).scrollTop() > 800 && $(window).scrollTop() < 1300){
        adiv.style.left ="133px";
    }else if($(window).scrollTop() > 1300 && $(window).scrollTop() < 2500){
        adiv.style.left ="253px";
    }else if($(window).scrollTop() > 2500 && $(window).scrollTop() < 2900){
        adiv.style.left ="363px";
    }else if($(window).scrollTop() > 2900 && $(window).scrollTop() < 3500){
        adiv.style.left ="469px";
    }else if($(window).scrollTop() > 3500 && $(window).scrollTop() < 4500){
        adiv.style.left ="469px";
    }else if($(window).scrollTop() > 4500 && $(window).scrollTop() < 5000){
        adiv.style.left ="579px";
    }else if($(window).scrollTop() > 5000 ){
        adiv.style.left ="689px";
    }
}




