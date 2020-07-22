// 网页底部地点点击切换
var oa = document.getElementsByClassName('officeA');
var ol = document.getElementsByClassName('officeLi');
var od = document.getElementsByClassName('about-officetextitem');




od[0].className = "about-officetextitem divactive";
ol[0].style.display = "block";
for( var i = 0; i < oa.length; i++){
    (function(n){
        oa[n].onclick = function(){
            for( var j = 0; j < od.length; j++){
                od[j].className = "about-officetextitem";
               oa[j].className = "officeA";
               ol[j].style.display = "none";
            }
            od[n].className = "about-officetextitem divactive";
            ol[n].style.display = "block";
        }
    }(i))
}


//第二页面发展历史的点击效果
var cli1 = document.getElementsByClassName('cli1')[0];
var cli2 = document.getElementsByClassName('cli2')[0];
var cli3 = document.getElementsByClassName('cli3')[0];
var cli4 = document.getElementsByClassName('cli4')[0];
var cli5 = document.getElementsByClassName('cli5')[0];
var cdiv = document.getElementsByClassName('cdiv')[0];
var cp1 = document.getElementsByClassName('cp1')[0];
var cp2 = document.getElementsByClassName('cp2')[0];
var cp3 = document.getElementsByClassName('cp3')[0];
var cp4 = document.getElementsByClassName('cp4')[0];
var cp5 = document.getElementsByClassName('cp5')[0];

cp1.style.display ="block"
cli1.onclick = function(){
    cp1.style.display = "block";
    cp2.style.display = "none";
    cp3.style.display = "none";
    cp4.style.display = "none";
    cp5.style.display = "none";
    cdiv.style.left = "0px";
}
cli2.onclick = function(){
    cp1.style.display = "none";
    cp2.style.display = "block";
    cp3.style.display = "none";
    cp4.style.display = "none";
    cp5.style.display = "none";
    cdiv.style.left = "-1139px";
}
cli3.onclick = function(){
    cp1.style.display = "none";
    cp2.style.display = "none";
    cp3.style.display = "block";
    cp4.style.display = "none";
    cp5.style.display = "none";
    cdiv.style.left = "-3450px";
}
cli4.onclick = function(){
    cp1.style.display = "none";
    cp2.style.display = "none";
    cp3.style.display = "none";
    cp4.style.display = "block";
    cp5.style.display = "none";
    cdiv.style.left = "-5830px";
}
cli5.onclick = function(){
    cp1.style.display = "none";
    cp2.style.display = "none";
    cp3.style.display = "none";
    cp4.style.display = "none";
    cp5.style.display = "block";
    cdiv.style.left = "-7760px";
}





//第二页面中的导航部分
var  asection = document.getElementsByClassName('about-nav-section');
var  adiv = document.getElementById('adiv');
asection[0].onclick = function(){
    adiv.style.left ="16px";
}
asection[1].onclick = function(){
    adiv.style.left ="133px";
}
asection[2].onclick = function(){
    adiv.style.left ="253px";
}
asection[3].onclick = function(){
    adiv.style.left ="363px";
}
asection[4].onclick = function(){
    adiv.style.left ="469px";
}
asection[5].onclick = function(){
    adiv.style.left ="579px";
}
asection[6].onclick = function(){
    adiv.style.left ="689px";
}




