 
//副导航的单机切换卡效果
var btnUser = document.getElementById('btnUser');
var btnEnterprise = document.getElementById('btnEnterprise');
var btnTechnology = document.getElementById('btnTechnology');
var sectionUser = document.getElementById('section-user');
var sectionEnterprise = document.getElementById('section-enterprise');
var sectionTechnology = document.getElementById('section-technology');

btnUser.className = "btnactive"
 sectionUser.style.display = "block";
 sectionEnterprise.style.display = "none";
 sectionTechnology.style.display = "none";

btnUser.onclick = function(){
    btnTechnology.className = "";
    btnEnterprise.className = "";
    btnUser.className = "btnactive";
    sectionUser.style.display = "block";
    sectionEnterprise.style.display = "none";
    sectionTechnology.style.display = "none";
}
btnEnterprise.onclick = function(){
    btnTechnology.className = "";
    btnEnterprise.className = "btnactive";
    btnUser.className = "";
    sectionUser.style.display = "none";
    sectionEnterprise.style.display = "block";
    sectionTechnology.style.display = "none";
}
btnTechnology.onclick = function(){
    btnTechnology.className = "btnactive";
    btnEnterprise.className = " ";
    btnUser.className = " ";
    sectionUser.style.display = "none";
    sectionEnterprise.style.display = "none";
    sectionTechnology.style.display = "block";
}





/*  网页第三页面面向企业底部轮播图 */

var img = document.getElementsByClassName('industry');
var li = document.getElementsByClassName('lisec');

img[0].style.display = "block";

for( var i = 0; i < img.length; i++){
    (function(n){
        li[n].onmouseover = function(){
            for( var j = 0; j < img.length; j++){
                img[j].style.display = "none";
                li[j].className = "lisec";
            }
            this.className = "lisec liactive";
            img[n].style.display = "block";
        }
    }(i))
}