// // jQuery check
// window.onload = function() {
//     if (window.jQuery) {  
//         // jQuery is loaded  
//         alert("Yeah!");
//     } else {
//         // jQuery is not loaded
//         alert("Doesn't Work");
//     }
// }

// type it out
var inputBox = document.querySelector("#mytypingText"),
	myString = "web developer & design enthusiast",
	myArray = myString.split(""),
	loopTimer;

var frameLoop = function() {
    if (myArray.length > 0) {
        inputBox.innerHTML += myArray.shift()
    } else {
        clearTimeout(loopTimer)
    }
    var loopTimer = setTimeout("frameLoop()", 90)
}

$( document ).ready(function(){
	frameLoop();
});

// scroll to navbar
$( 'button' ).click(function(){
	window.scroll({ top: window.innerHeight, left: 0, behavior: 'smooth' });
});

// navbar sticky 
var nb = $(".navbar");

$(window).scroll(function(){
	if($(this).scrollTop() > window.innerHeight - 1){
		nb.removeClass("navbar");
		nb.addClass("main-nav-scrolled");
	} else {
		nb.removeClass("main-nav-scrolled");
		nb.addClass("navbar");
	}
});

// scroll back to the top
// window.scroll({ top: 0, left: 0, behavior: 'smooth' });