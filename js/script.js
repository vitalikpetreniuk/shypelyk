var shh;
var hand_l;
var hand_r;
var logo;

function mvImg(e,hand) {
    var valueX = (e.pageX * -1 / 50);
    var valueY = (e.pageY * -1 / 50);

    var valueXr = (e.pageX / 80);
    var valueYr = (e.pageY / 80);

    var valueXl = (e.pageX / 140);
    var valueYl = (e.pageY / 140);

    hand_l.style.marginLeft = valueX + "px";
    hand_l.style.marginBottom = valueY + "px";

    hand_r.style.marginRight = valueXr + "px";
    hand_r.style.marginBottom = valueYr + "px";

    logo.style.left = valueXl + "px";
    logo.style.bottom = valueYl + "px";
}
window.onload = function() {
    shh = document.getElementById("shh");
    hand_l = document.getElementById("hand-l");
    hand_r = document.getElementById("hand-r");
    logo = document.getElementById("shh-logo");

    if (shh && $(window).width()>1024) {
        shh.addEventListener("mousemove",mvImg,false);
    }
}

$(function(){
    if($(window).width()<767)
    {
        // $('body').height('40');
    }
})