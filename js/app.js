// jQuery check
console.log($);

// navbar sticky 
var nb = $(".navbar");

$(window).scroll(function(){
  if($(this).scrollTop() >= window.innerHeight - 10){
    nb.removeClass("navbar");
    nb.addClass("main-nav-scrolled");
  } else {
    nb.removeClass("main-nav-scrolled");
    nb.addClass("navbar");
  }
});

// toggle nav
function toggleNav(){
  $("#hamburger").text(function(_, text) {
      return text === '☰' ? '☓' : '☰';
  });
  $("#hamburger").toggleClass("active-x");
  $("#drop-nav").slideToggle("slow");
}

//hamburger
$("#hamburger").on('click', toggleNav);
$("#h2").on('click', toggleNav);
$("#a2").on('click', toggleNav);
$("#p2").on('click', toggleNav);
$("#r2").on('click', toggleNav);
$("#c2").on('click', toggleNav);

// scrolling
$('#action-button').click(function(){
    $("html, body").animate({scrollTop:$('#about').offset().top - 120}, 700);
});

$(document).on('click', 'a[href^="#"]', function(e) {
    var id = $(this).attr('href');
    var $id = $(id);

    if ($id.length === 0) {
        return;
    }

    e.preventDefault();
    var pos = $id.position().top;

    switch(id) {
        case "#home":
          $("html, body").animate({ scrollTop: 0 }, 700);
          $("#h").blur();
          $("#h2").blur();
          break;
        case "#about":
          $("html, body").animate({scrollTop:$('#about').offset().top - 65}, 700); 
          $("#a").blur();   
          $("#a2").blur();        
          break;
        case "#portfolio":
          $("html, body").animate({scrollTop:$('#portfolio').offset().top - 65}, 700); 
          $("#p").blur();
          $("#p2").blur();
          break;
        case "#resume":
          $("html, body").animate({scrollTop:$('#resume').offset().top - 65}, 700);
          $("#r").blur();
          $("#r2").blur();
          break;
        case "#contact":
          $("html, body").animate({scrollTop:$('#contact').offset().top - 65}, 700);
          $("#c").blur();
          $("#c2").blur();
          break;
        default:
          $("html, body").animate({ scrollTop: 0 }, 700);
    } 
});

// scroll to the top
$('.back-to-top').click(function(){
     $("html, body").animate({ scrollTop: 0 }, 700);
});

$("#nav-name").click(function(){
    $("html, body").animate({scrollTop:0}, 700);
});

// scroll to top in refresh
// $(window).on('beforeunload', function() {
//     $(window).scrollTop(0);
// });

// scroll to contact form 
$("#contact-me").click(function(){
   $("html, body").animate({scrollTop:$('#contact').offset().top - 65}, 700);
});

// type it out
var inputBox = document.querySelector("#mytypingText"),
  myString = "web developer & design enthusiast",
  myArray = myString.split(""),
  loopTimer;


if(window.location.href.includes("thanks")){
  myString = "I'll get back to you soon.";
  myArray = myString.split("");
}

var frameLoop = function() {
    if (myArray.length > 0) {
        inputBox.innerHTML += myArray.shift()
    } else {
        clearTimeout(loopTimer)
    }
    var loopTimer = setTimeout("frameLoop()", 90)
}

$(document).ready(function(){
  frameLoop();
});


//github 
var myGitRepoURl = "https://api.github.com/users/ttn-js/repos?sort=updated",
    promiseThomas = $.getJSON(myGitRepoURl),
    github = document.querySelector("#github");

var showRepo = function(jsonRepo) {

    var newHTMLString = "",
        dataArray = jsonRepo; 

    var repoHeader =  '<div id="gh_label" style="text-align:center;"><i class="fa fa-github-alt fa-2x"></i><h4 style="display: inline; padding:0.5em;">GitHub Repositories</h4></div>'
        repoHeader += '<a href="https://github.com/TTN-js" target="_blank">'
        repoHeader += '<span class="divider" style="margin-top:10px; margin-bottom:0px;"></span>'

    github.innerHTML = repoHeader;

    var repoContainer = '<div id="gh_list" style="height: 70vh; overflow: scroll;"></div>';

    github.innerHTML += repoContainer;

    var gh_list = document.querySelector("#gh_list");

    console.log(dataArray);
    for (var i =  0; i < dataArray.length; i++){
      var singleRepo = dataArray[i];
      // console.log(singleRepo);
      newHTMLString += dataObjToHTML(singleRepo);
    }
    gh_list.innerHTML += newHTMLString;
}

var dataObjToHTML = function(singleRepo){

  var repoHTML  = '<section id="repo_list">' 
      repoHTML += '<ul class="repoBox" style="padding:7px; margin-top:5px; margin-bottom:5px; background-color:rgba(0,0,0,0.2); border-radius:5px;">' 
      repoHTML += '<a href="'+singleRepo.clone_url+'" target="_blank">'
      repoHTML += '<p class="repoName" style="font-size:15px; margin-bottom:7px;">' + singleRepo.name +'</p>'
      repoHTML += '</a>'
      repoHTML += '<p class="description" style="margin-bottom:0px; font-size:12px">' + singleRepo.description +'</p>'
      repoHTML += '</ul>'
      repoHTML += '</section>'

  return repoHTML
}

$( document ).ready(function(){
  promiseThomas.then(showRepo);
}); 

$(document).ready(function() {
  var about = new Waypoint({
    element: document.getElementById('about'),
    handler: function(direction) {
      if(direction === "down"){
        $("#a").addClass('selected');
        $("#h").removeClass('selected');
        $("#p").removeClass('selected');
        $("#r").removeClass('selected');
        $("#c").removeClass('selected');
        $("#a2").addClass('selected');
        $("#h2").removeClass('selected');
        $("#p2").removeClass('selected');
        $("#r2").removeClass('selected');
        $("#c2").removeClass('selected');
      }else{
        $("#h").addClass('selected');
        $("#a").removeClass('selected');
        $("#p").removeClass('selected');
        $("#r").removeClass('selected');
        $("#c").removeClass('selected');
        $("#h2").addClass('selected');
        $("#a2").removeClass('selected');
        $("#p2").removeClass('selected');
        $("#r2").removeClass('selected');
        $("#c2").removeClass('selected');
      }
    },
    offset: 150
  });

  var portfolio = new Waypoint({
    element: document.getElementById('portfolio'),
    handler: function(direction) {
      if(direction === "down"){
        $("#p").addClass('selected');
        $("#h").removeClass('selected');
        $("#a").removeClass('selected');
        $("#r").removeClass('selected');
        $("#c").removeClass('selected');
        $("#p2").addClass('selected');
        $("#h2").removeClass('selected');
        $("#a2").removeClass('selected');
        $("#r2").removeClass('selected');
        $("#c2").removeClass('selected');
      }else{
        $("#a").addClass('selected');
        $("#h").removeClass('selected');
        $("#p").removeClass('selected');
        $("#r").removeClass('selected');
        $("#c").removeClass('selected');
        $("#a2").addClass('selected');
        $("#h2").removeClass('selected');
        $("#p2").removeClass('selected');
        $("#r2").removeClass('selected');
        $("#c2").removeClass('selected');
      }
    },
    offset: 150
  });

  var resume = new Waypoint({
    element: document.getElementById('resume'),
    handler: function(direction) {
      if(direction === "down"){
        $("#r").addClass('selected');
        $("#h").removeClass('selected');
        $("#p").removeClass('selected');
        $("#a").removeClass('selected');
        $("#c").removeClass('selected');
        $("#r2").addClass('selected');
        $("#h2").removeClass('selected');
        $("#p2").removeClass('selected');
        $("#a2").removeClass('selected');
        $("#c2").removeClass('selected');
      }else{
        $("#p").addClass('selected');
        $("#h").removeClass('selected');
        $("#a").removeClass('selected');
        $("#r").removeClass('selected');
        $("#c").removeClass('selected');
        $("#p2").addClass('selected');
        $("#h2").removeClass('selected');
        $("#a2").removeClass('selected');
        $("#r2").removeClass('selected');
        $("#c2").removeClass('selected');
      }
    },
    offset: 150
  });

  var contact = new Waypoint({
    element: document.getElementById('contact'),
    handler: function(direction) {
      if(direction === "down"){
        $("#c").addClass('selected');
        $("#h").removeClass('selected');
        $("#p").removeClass('selected');
        $("#r").removeClass('selected');
        $("#a").removeClass('selected');
        $("#c2").addClass('selected');
        $("#h2").removeClass('selected');
        $("#p2").removeClass('selected');
        $("#r2").removeClass('selected');
        $("#a2").removeClass('selected');
      }else{
        $("#r").addClass('selected');
        $("#h").removeClass('selected');
        $("#p").removeClass('selected');
        $("#a").removeClass('selected');
        $("#c").removeClass('selected');
        $("#r2").addClass('selected');
        $("#h2").removeClass('selected');
        $("#p2").removeClass('selected');
        $("#a2").removeClass('selected');
        $("#c2").removeClass('selected');
      }
    },
    offset: 150
  });
});

