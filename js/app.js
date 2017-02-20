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

// scrolling
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
            window.scroll({ top: window.innerHeight + pos - 80, left: 0, behavior: 'smooth' });         		
            break;
        case "#portfolio":
            window.scroll({ top: window.innerHeight + pos - 80, left: 0, behavior: 'smooth' });
            break;
        case "#resume":
            window.scroll({ top: window.innerHeight + pos - 80, left: 0, behavior: 'smooth' });
            break;
        case "#contact":
            window.scroll({ top: window.innerHeight + pos - 80, left: 0, behavior: 'smooth' });
            break;
        default:
            window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    } 
});


// $(window).scroll(function(){
//     if($(window).scrollTop() <= 760){
//       $("#h").css({"color": "#fff", "text-decoration": "underline"});
//     }
//     else if ($(window).scrollTop() <= 845){
//        $("#h").css({color: "#31b0d5"});
//        $("#a").css({"color": "#fff", "text-decoration": "underline"});
//     }
//     else if ($(window).scrollTop() <= 1610){
//        $("#a").css({color: "#31b0d5"});
//        $("#p").css({"color": "#fff", "text-decoration": "underline"});
//     }
//     else if ($(window).scrollTop() <= 2375){
//        $("#p").css({color: "#31b0d5"});
//        $("#r").css({"color": "#fff", "text-decoration": "underline"});
//     }
//     else if ($(window).scrollTop() <= 3140){
//        $("#r").css({color: "#31b0d5"});
//        $("#c").css({"color": "#fff", "text-decoration": "underline"});
//     }
//     else {
//     	$("#c").css({color: "#31b0d5"});
//     }
// });

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

// onload
$( document ).ready(function(){
	frameLoop();
});
	
// scroll back to the top
$( '.back-to-top' ).click(function(){
	window.scroll({ top: 0, left: 0, behavior: 'smooth' });
});
