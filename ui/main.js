console.log('Loaded!');

//move THUG cover
var img = document.getElementById('THUG');
var marginLeft=0;
var flag=0;
var interval;
function moveRight () {
    marginLeft = marginLeft + 1;
    img.style.marginLeft = marginLeft + 'px';
    if( marginLeft >= 171) {
    img.onclick = function () {
        interval = setInterval(moveLeft, 20);
    }}
}

function moveLeft () {
    marginLeft = marginLeft - 1;
    img.style.marginLeft = marginLeft - 'px';
    if( marginLeft <= 169) {
        img.onclick = function () {
        interval = setInterval(moveRight, 20);
    }}
}

img.onclick = function () {
    interval = setInterval(moveRight, 20);
}


