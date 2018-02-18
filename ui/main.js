console.log('Loaded!');

//move THUG cover
var img = document.getElementById('THUG');
var marginLeft=0;
var flag=0;
var interval;
function moveRight () {
    marginLeft = marginLeft + 1;
    img.style.marginLeft = marginLeft + 'px';
}

function moveLeft () {
    marginLeft = marginLeft - 1;
    img.style.marginLeft = marginLeft - 'px';
}

img.onclick = function () {
    if( flag == 1 )
    {
        interval = setInterval(moveRight, 20);
        flag=0;
    }
    else
    {
        interval = setInterval(moveLeft, 20);
        flag=1;
    }
    //img.style.marginLeft = '100px';
}
