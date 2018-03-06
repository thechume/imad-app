//console.log('Loaded!');

/*var button = document.getElementById('counter');
button.onclick = function() {
    //create a request object
    var request = new XMLHttpRequest();
    
    //capture the response and store it in a variable
    request.onreadystatechange = function() {
        if ( request.readyState === XMLHttpRequest.DONE ) {
            //take some action
            if( request.status === 200 ) {
                var cntr = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
        //not done yet
    };
};*/
    //make the request
     var nameInput = document.getElementById('name');
    var namex = nameInput.value;
    request.open('GET','https://ssum16cs.imad.hasura-app.io/counter', true);
    request.send(null);


//submit name

var submit = document.getElementById('submit.btn');
submit.onclick = function () {
    //make a req to server and send name
    //capture list of names and render as list
    var names = ['name1', 'name2', 'name3', 'name4'];
    var list = '';
    for (var i=0; i<names.length ; i++)
    {
        list += '<li>' + names[i] + '</li>';
    }
    var ul = document.getElementById('namelist');
    ul.innerHTML = list;
};

//THIS WORKS TO INCREMENT COUNTER WHEN CLICK

var button = document.getElementById('counter');
 var counter = 0;
 button.onclick = function() {
     //make a request to the counter endpoint
     
     //capture the response and store it in a variable
     
     //render the variable in the correct span
     counter = counter + 1;
     var span = document.getElementById('count');
     span.innerHTML = counter.toString();
 };



//move THUG cover
/*var img = document.getElementById('THUG');

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
}*/


