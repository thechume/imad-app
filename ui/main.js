console.log('Loaded!');

//move THUG cover
var img = document.getElementById('THUG');
var marginLeft=0;
var flag=0;
function moveRight () {
    if ( marginLeft == 150 )
    {
        return;
    }
    marginLeft = marginLeft + 1;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function () {
    var interval = setInterval(moveRight, 50);
    if ( img.onclick )
    {
        return;
    }
    //img.style.marginLeft = '100px';
}