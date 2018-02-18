console.log('Loaded!');

//move THUG cover
var img = document.getElementById('THUG');
var marginLeft=0;
var flag=0;
var interval;
function moveRight () {
    if( marginLeft == 150 ) {
        flag=1;
    }
    else {
        marginLeft = marginLeft + 1;
        img.style.marginLeft = marginLeft + 'px';
    }
}

function moveLeft () {
    if( marginLeft == 10 ) {
        flag=1;
    }
    else {
        marginLeft = marginLeft - 1;
        img.style.marginLeft = marginLeft - 'px';
    }
}

img.onclick = function () {
    if ( flag == 1)
    {
        interval = setInterval(moveLeft, 20);
    }
    else {
        interval = setInterval(moveRight, 20);
    }
}
