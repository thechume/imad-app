console.log('Loaded!');

//move THUG cover
var img = document.getElementById('THUG');
var marginLeft=0;
function moveRight () {
        img.onclick = function () {
        var interval = setInterval(moveLeft, 20);
        }
    marginLeft = marginLeft + 1;
    img.style.marginLeft = marginLeft + 'px';
}

function moveLeft () {
    img.onclick = function () {
        var interval = setInterval(moveRight, 20);
    }
    marginLeft = marginLeft - 1;
    img.style.marginLeft = marginLeft - 'px';
}

img.onclick = function () {
    var interval = setInterval(moveRight, 20);
    //img.style.marginLeft = '100px';
}
