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

$(document).on('click', 'a[href^="#"]', function(e) {
    // target element id
    var id = $(this).attr('href');
    
    // target element
    var $id = $(id);
    // if nothing then die
    if ($id.length === 0) {
        return;
    }

    // prevent standard hash navigation (avoid blinking in IE)
    e.preventDefault();
    
    // top position relative to the document
    var pos = $id.position().top;

    switch(id) {
        case "#home":
           	window.scroll({ top: 0, left: 0, behavior: 'smooth' });
            break;
        case "#about":
            window.scroll({ top: window.innerHeight + pos - 70, left: 0, behavior: 'smooth' });
            break;
        case "#work":
            window.scroll({ top: window.innerHeight + pos - 70, left: 0, behavior: 'smooth' });
            break;
        case "#resume":
            window.scroll({ top: window.innerHeight + pos - 70, left: 0, behavior: 'smooth' });
            break;
        case "#contact":
            window.scroll({ top: window.innerHeight + pos - 70, left: 0, behavior: 'smooth' });
            break;
        default:
            window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    } 

    // alert(window.innerHeight - pos);
    // animated top scrolling
    // window.scroll({ top: window.innerHeight + pos - 100, left: 0, behavior: 'smooth' });
    // $('body, html').animate({scrollTop: pos});
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