var shh;
var hand_l;
var hand_r;

function mvImg(e,hand) {
    var valueX = (e.pageX * -1 / 30);
    var valueY = (e.pageY * -1 / 30);

    var valueXr = (e.pageX / 40);
    var valueYr = (e.pageY / 40);

    console.log(valueX);
    console.log(valueY);

    hand_l.style.marginLeft = valueX + "px"
    hand_l.style.marginBottom = valueY + "px"

    hand_r.style.marginRight = valueXr + "px"
    hand_r.style.marginBottom = valueYr + "px"
}
window.onload = function() {
    shh = document.getElementById("shh");
    hand_l = document.getElementById("hand-l");
    hand_r = document.getElementById("hand-r");

    if (shh && $(window).width()>1024) {
        shh.addEventListener("mousemove",mvImg,false);
    }
}