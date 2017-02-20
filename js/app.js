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


var topofHome = $("#h").offset().top; 
var heightofHome = $("#h").outerHeight(); 

var topofAbout = $("#a").offset().top; 
var heightofAbout = $("#a").outerHeight();

var topofPortfolio = $("#p").offset().top; 
var heightofPortfolio = $("#p").outerHeight();

var topofResume = $("#r").offset().top; 
var heightofResume = $("#r").outerHeight();

var topofContact = $("#c").offset().top; 
var heightofContact = $("#c").outerHeight();

$(window).scroll(function(){
	
	$("#h").blur();
	$("#a").blur();
	$("#p").blur();
	$("#r").blur();
	$("#c").blur();

    if($(window).scrollTop() < (topofHome + heightofHome - 80)){
       $("#h").addClass('selected');
       $("#a").removeClass('selected');
       $("#p").removeClass('selected');
       $("#r").removeClass('selected');
       $("#c").removeClass('selected');
    }
    if($(window).scrollTop() > (topofAbout + heightofAbout - 80)){
       $("#a").addClass('selected');
       $("#h").removeClass('selected');
       $("#p").removeClass('selected');
       $("#r").removeClass('selected');
       $("#c").removeClass('selected');
    }
    if($(window).scrollTop() > (topofPortfolio + heightofPortfolio + 600)){
       $("#p").addClass('selected');
       $("#h").removeClass('selected');
       $("#a").removeClass('selected');
       $("#r").removeClass('selected');
       $("#c").removeClass('selected');
    }
    if($(window).scrollTop() > (topofResume + heightofResume + 1200)){
       $("#r").addClass('selected');
       $("#h").removeClass('selected');
       $("#a").removeClass('selected');
       $("#p").removeClass('selected');
       $("#c").removeClass('selected');
    }
    if($(window).scrollTop() > (topofContact + heightofContact + 1800)){
       $("#c").addClass('selected');
       $("#h").removeClass('selected');
       $("#a").removeClass('selected');
       $("#p").removeClass('selected');
       $("#r").removeClass('selected');
    }
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
