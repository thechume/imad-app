console.log('Loaded!');

//move THUG cover
var img = document.getElementById('THUG');
img.onclick = function () {
    var interval = setInterval(moveLeft, 100);
    img.style.marginLeft = '100px';
}