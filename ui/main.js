console.log('Loaded!');

//move THUG cover
var img = document.getElementById('THUG');
var marginLeft=0;
function moveRight () {
    marginLeft = marginLeft + 10;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function () {
    var interval = setInterval(moveRight, 50);
    img.style.marginLeft = '100px';
}