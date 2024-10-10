let img12 = null;
function init(){
    img12 = document.getElementById("img1");
    img12.style.position = 'relative';
    img12.style.left = '0px';
}
function moveRight(){
    img12.style.left = parseInt(img12.style.left) + 10 + 'px';
}
window.onload = init;
