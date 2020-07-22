

//网站首页切换卡效果
var sa = document.getElementsByClassName('sa');
var sdiv = document.getElementsByClassName('sdiv');
var sul = document.getElementsByClassName('sul');
var simg = document.getElementsByClassName('simg');



sul[0].style.display = "block";
sa[0].className = "sa sasa";
sdiv[0].className = "sdiv sdivdiv";
simg[0].className = "simg simgimg";


for(var i = 0; i < sa.length; i++){
    (function(n){
        sa[n].onmouseover = function(){
            for( var j = 0; j < sa.length ; j++){
                sa[j].className = "sa";
                sdiv[j].className = "sdiv";
                simg[j].className = "simg";
                sul[j].style.display = "none";
            }
            sa[n].className = "sa sasa";
            sdiv[n].className = "sdiv sdivdiv";
            simg[n].className = "simg simgimg";
            sul[n].style.display = "block";

        }
    }(i))
}



